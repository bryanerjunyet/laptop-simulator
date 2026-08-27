const DEFAULT_MODEL = "gemini-3.7-flash";
const properNounGlossary = [
  ["《雨后的第七盏灯》", "Yu Hou De Di Qi Zhan Deng"],
  ["雨后的第七盏灯", "Yu Hou De Di Qi Zhan Deng"],
  ["《边界之外》", "Bian Jie Zhi Wai"],
  ["边界之外", "Bian Jie Zhi Wai"],
  ["《没人看见的东西》", "Mei Ren Kan Jian De Dong Xi"],
  ["没人看见的东西", "Mei Ren Kan Jian De Dong Xi"],
  ["五煞文创", "Wu Sha Wen Chuang"],
  ["城市艺文中心", "Chengshi Yiwen Zhongxin"],
  ["城市时报", "Chengshi Shibao"],
  ["柳文清工作室", "Liu Wenqing Studio"],
  ["林若笙工作室", "Lin Ruosheng Studio"],
  ["白箱空间", "Bai Xiang Kong Jian"],
  ["南岸装裱", "Nan'an Zhuangbiao"],
  ["蓝桥印务", "Lanqiao Yinwu"],
  ["艺仓物流", "Yicang Wuliu"],
  ["追光", "Zhuiguang"],
  ["单鸿", "Shan Hong"],
  ["阿禾", "Ah He"],
  ["穷奇", "Qiong Qi"],
  ["柳文清", "Liu Wenqing"],
  ["王充奇", "Wang Chongqi"],
  ["林若笙", "Lin Ruosheng"],
  ["陶景然", "Tao Jingran"],
  ["文清", "Wenqing"]
];

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
    const texts = Array.isArray(body?.texts)
      ? body.texts.map((text) => String(text).trim()).filter(Boolean).slice(0, 120)
      : [];

    if (!texts.length) {
      return response.status(400).json({ error: "No text provided" });
    }

    const protectedTexts = texts.map(protectProperNouns);
    const translations = process.env.GEMINI_API_KEY
      ? await translateWithGeminiOrFallback(protectedTexts)
      : await translateWithPublicTranslator(protectedTexts);

    if (!Array.isArray(translations) || translations.length !== texts.length) {
      return response.status(502).json({ error: "Unexpected translation response" });
    }

    return response.status(200).json({ translations });
  } catch (error) {
    return response.status(500).json({ error: error.message || "Translation failed" });
  }
};

async function translateWithGeminiOrFallback(texts) {
  try {
    return await translateWithGemini(texts);
  } catch {
    return await translateWithPublicTranslator(texts);
  }
}

async function translateWithGemini(texts) {
  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const prompt = [
    "Translate every item from Chinese into natural English.",
    "Each item may be a full sentence, UI label, comment, email paragraph, or article paragraph.",
    "Preserve dates, email addresses, filenames, numbers, and UI meaning.",
    "Chinese person names, fictional entities, organizations, artwork titles, venue names, and other unique proper nouns must be romanized in Hanyu Pinyin, not translated by meaning.",
    "Use this glossary exactly whenever the term appears:",
    JSON.stringify(Object.fromEntries(properNounGlossary)),
    "Do not summarize, shorten, omit, censor, or explain.",
    "Return only a valid JSON array of strings with the same order and length as the input.",
    JSON.stringify(texts)
  ].join("\n\n");

  const geminiResponse = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0,
        responseMimeType: "application/json"
      }
    })
  });

  const payload = await geminiResponse.json();
  if (!geminiResponse.ok) {
    throw new Error(payload?.error?.message || "Gemini translation failed");
  }

  const rawText = payload?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim();

  return parseTranslations(rawText);
}

async function translateWithPublicTranslator(texts) {
  return await mapWithConcurrency(texts, 6, translateOneWithPublicTranslator);
}

async function translateOneWithPublicTranslator(text) {
  const chunks = splitTextForTranslation(text);
  const translatedChunks = [];

  for (const chunk of chunks) {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", chunk);
    url.searchParams.set("langpair", "zh-CN|en");

    const translationResponse = await fetch(url.href);
    if (!translationResponse.ok) {
      throw new Error("Translation service unavailable");
    }

    const payload = await translationResponse.json();
    if (payload?.responseStatus !== 200 && payload?.responseStatus !== "200") {
      throw new Error(payload?.responseDetails || "Translation service unavailable");
    }

    translatedChunks.push(payload?.responseData?.translatedText || chunk);
  }

  return translatedChunks.join(" ").replace(/\s+([,.;:!?])/g, "$1").trim() || text;
}

function splitTextForTranslation(text) {
  if (text.length <= 420) return [text];

  const chunks = [];
  let current = "";
  const parts = text.split(/(?<=[。！？!?；;，,])\s*/u);

  parts.forEach((part) => {
    if (!part) return;

    if ((current + part).length <= 420) {
      current += part;
      return;
    }

    if (current) {
      chunks.push(current);
    }

    if (part.length <= 420) {
      current = part;
      return;
    }

    for (let index = 0; index < part.length; index += 420) {
      chunks.push(part.slice(index, index + 420));
    }
    current = "";
  });

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function protectProperNouns(text) {
  let protectedText = text;
  getSortedGlossary().forEach(([source, target]) => {
    protectedText = protectedText.replaceAll(source, target);
  });
  return protectedText;
}

function getSortedGlossary() {
  return [...properNounGlossary].sort((first, second) => second[0].length - first[0].length);
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function parseTranslations(rawText = "") {
  try {
    return JSON.parse(rawText);
  } catch {
    const start = rawText.indexOf("[");
    const end = rawText.lastIndexOf("]");
    if (start === -1 || end === -1 || end <= start) return [];
    return JSON.parse(rawText.slice(start, end + 1));
  }
}
