const STORAGE_KEY = "mock_whatsapp_chats_v3";

const baseChats = [
  {
    id: "mom",
    name: "妈妈",
    color: "#6aa36f",
    status: "last seen today at 00:41",
    preview: "不要太累哦，记得吃饭",
    time: "00:41",
    messages: [
      ["date", "Last Monday"],
      ["received", "今天有吃晚饭吗？🍚", "19:42"],
      ["sent", "有，吃了面。", "19:50"],
      ["received", "不要每天都吃面，胃会不舒服😟", "19:51"],
      ["sent", "知道啦。😅", "19:53"],
      ["received", "最近还好吗？你好几天没有打电话回家了。", "21:08"],
      ["sent", "还好，最近有几个试镜。", "21:16"],
      ["received", "那就好。不要给自己太大压力。", "21:17"],
      ["received", "你小时候不是说，唱歌的时候最开心吗？开心也要照顾身体。❤️", "21:19"],
      ["sent", "嗯。只是有时候不知道自己是不是想太多。", "21:24"],
      ["received", "想太多也没关系，慢慢来。🌙", "21:26"],
      ["date", "Yesterday"],
      ["received", "你爸问你这个星期回来吗。", "12:08"],
      ["sent", "可能不行，晚上有练习。", "12:33"],
      ["received", "练习到几点？不要太晚回。", "12:34"],
      ["sent", "不确定，应该十一点前。", "12:35"],
      ["received", "好。回到房间跟妈妈讲一声。", "12:36"],
      ["sent", "嗯。", "12:40"],
      ["date", "Today"],
      ["received", "钱还够用吗？不够跟妈妈讲。", "00:38"],
      ["sent", "够。真的够。", "00:40"],
      ["received", "不要太累哦，记得吃饭🥺", "00:41"]
    ]
  },
  {
    id: "friend",
    name: "朋友A",
    color: "#5d7fb8",
    status: "online",
    preview: "要不要先找稳定工作？",
    time: "23:18",
    messages: [
      ["date", "Last Wednesday"],
      ["received", "你今天那个面试怎样？", "17:28"],
      ["sent", "唱完他们说会通知。", "17:46"],
      ["received", "听起来还可以啊。", "17:49"],
      ["sent", "他们每次都这样讲。", "17:51"],
      ["received", "别这样啦，至少你有去。💪", "17:53"],
      ["sent", "有去不代表有用。", "17:55"],
      ["date", "Yesterday"],
      ["received", "你还想继续坚持吗？", "22:46"],
      ["sent", "我不知道。", "22:50"],
      ["sent", "有时候觉得自己只是还没被看见。", "22:51"],
      ["received", "我懂，但你也要生活啊。", "22:52"],
      ["received", "房租那边你处理了吗？", "22:53"],
      ["sent", "还差一点。", "22:53"],
      ["received", "要不要先找稳定工作？晚上再唱也可以。", "22:54"],
      ["sent", "如果白天也不是我想要的，晚上还会有力气唱吗？", "23:03"],
      ["received", "我不是叫你放弃。", "23:07"],
      ["received", "我只是担心你每天这样撑。😔", "23:08"],
      ["sent", "我知道。谢谢。", "23:12"],
      ["received", "有需要就讲，别一直自己扛。🫂", "23:18"]
    ]
  },
  {
    id: "director",
    name: "导演",
    color: "#a35f67",
    status: "last seen yesterday at 18:02",
    preview: "这次角色还是给别人了",
    time: "18:02",
    messages: [
      ["date", "Last Friday"],
      ["sent", "导演您好，请问上次试镜有结果了吗？", "11:42"],
      ["received", "不好意思这两天比较忙。", "16:07"],
      ["received", "这次角色还是给别人了。", "16:08"],
      ["sent", "明白，谢谢导演。🙏", "16:10"],
      ["received", "你的状态不错，只是这次需要更成熟一点的感觉。", "16:12"],
      ["voice", "0:18", "16:13"],
      ["sent", "好，我会继续练。", "16:21"],
      ["date", "Yesterday"],
      ["sent", "如果之后还有合适的角色，可以再通知我吗？", "13:04"],
      ["received", "可以。你先把资料留着。", "15:22"],
      ["sent", "谢谢导演。🙏", "15:29"],
      ["received", "另外，下个月有个很小的群演位置，没有台词，你可以考虑。", "15:31"],
      ["sent", "有唱歌或表演的部分吗？", "15:34"],
      ["received", "没有，就是背景。", "15:41"],
      ["sent", "我想一下，谢谢。", "15:48"]
    ]
  },
  {
    id: "notes",
    name: "Self Notes",
    color: "#b39a55",
    status: "pinned",
    preview: "再坚持一下。",
    time: "02:03",
    messages: [
      ["date", "Pinned"],
      ["sent", "不要删掉这些邮件。", "01:32"],
      ["sent", "以后如果真的站上更大的舞台，就会觉得这些都值得。", "01:35"],
      ["sent", "可是如果没有以后呢？", "01:47"],
      ["sent", "今天练到副歌的时候又破音了。不是嗓子的问题，是心太急。", "01:52"],
      ["sent", "明天：\n1. 少喝咖啡 ☕\n2. 练气息\n3. 找兼职\n4. 不要看余额太久", "01:58"],
      ["sent", "再坚持一下。🌙", "02:03"]
    ]
  },
  {
    id: "dad",
    name: "爸爸",
    color: "#8a7867",
    status: "last seen Sunday",
    preview: "有空回家吃饭",
    time: "Sun",
    messages: [
      ["date", "Sunday"],
      ["received", "有空回家吃饭。", "18:11"],
      ["received", "你妈煮了你喜欢的汤。", "18:12"],
      ["sent", "这周可能不行，有练习。", "19:20"],
      ["received", "嗯。注意身体。", "19:27"],
      ["sent", "爸，你觉得如果一个人一直没有结果，还应该继续吗？", "20:14"],
      ["received", "看你是不是还想做。", "20:42"],
      ["received", "如果还想，就认真做。如果不想，也不是丢脸。", "20:43"],
      ["sent", "我还想。", "20:47"],
      ["received", "那就把身体顾好。路长一点没关系。", "20:52"]
    ]
  }
];

let chats = loadChats();
let activeChatId = chats[0].id;

const contacts = document.getElementById("contacts");
const header = document.getElementById("chatHeader");
const messages = document.getElementById("messages");
const composer = document.getElementById("composer");
const input = document.getElementById("messageInput");

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});

input.addEventListener("input", () => {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 110)}px`;
});

function loadChats() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(baseChats);

  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(baseChats);
  }
}

function saveChats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
}

function renderContacts() {
  contacts.innerHTML = chats.map((chat) => {
    const last = getLastMessage(chat);
    chat.preview = last ? last[1].replace(/\n/g, " ") : chat.preview;
    chat.time = last ? last[2] : chat.time;

    return `
      <button class="contact ${chat.id === activeChatId ? "active" : ""}" data-id="${chat.id}">
        <span class="avatar" style="background:${chat.color}">${escapeHtml(chat.name.slice(0, 1))}</span>
        <span>
          <strong>${escapeHtml(chat.name)}</strong>
          <span class="preview">${escapeHtml(chat.preview)}</span>
        </span>
        <span class="time">${escapeHtml(chat.time)}</span>
      </button>
    `;
  }).join("");

  contacts.querySelectorAll(".contact").forEach((button) => {
    button.addEventListener("click", () => {
      activeChatId = button.dataset.id;
      renderContacts();
      renderChat(activeChatId, true);
    });
  });
}

function renderChat(id, jumpToBottom = false) {
  const chat = chats.find((item) => item.id === id);
  if (!chat) return;

  header.innerHTML = `
    <span class="avatar" style="background:${chat.color}">${escapeHtml(chat.name.slice(0, 1))}</span>
    <span class="chat-title"><strong>${escapeHtml(chat.name)}</strong><span>${escapeHtml(chat.status)}</span></span>
  `;

  messages.innerHTML = chat.messages.map((message) => {
    if (message[0] === "date") return `<span class="date">${escapeHtml(message[1])}</span>`;
    if (message[0] === "voice") {
      return `
        <div class="bubble received">
          <div class="voice-note">
            <span class="play">▶</span>
            <span class="wave"></span>
            <span>${escapeHtml(message[1])}</span>
          </div>
          <small>${escapeHtml(message[2])}</small>
        </div>
      `;
    }

    return `<div class="bubble ${message[0]}">${formatText(message[1])}<small>${escapeHtml(message[2])}</small></div>`;
  }).join("");

  if (jumpToBottom) {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const chat = chats.find((item) => item.id === activeChatId);
  const last = chat.messages[chat.messages.length - 1];
  const time = currentTime();

  if (!last || last[0] === "date" || last[2] !== time) {
    const hasToday = chat.messages.some((message) => message[0] === "date" && message[1] === "Today");
    if (!hasToday) chat.messages.push(["date", "Today"]);
  }

  chat.messages.push(["sent", text, time]);
  input.value = "";
  input.style.height = "auto";
  saveChats();
  renderContacts();
  renderChat(activeChatId, true);
}

function getLastMessage(chat) {
  for (let i = chat.messages.length - 1; i >= 0; i -= 1) {
    if (chat.messages[i][0] !== "date") return chat.messages[i];
  }
  return null;
}

function currentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

function formatText(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

renderContacts();
renderChat(activeChatId, true);
