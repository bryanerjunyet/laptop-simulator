const requiredMails = [
  {
    folder: "important",
    sender: "单鸿",
    from: "单鸿 <shanhong@wusha-studio.com>",
    to: "柳文清 <liuwenqing@wusha-gallery.com>",
    time: "2026.05.25 14:20",
    subject: "内部邮件：夏季主展选品确认",
    unread: true,
    snippet: "夏季主展的位置有限，这次还是以你作为主要推广对象。",
    body: `文清，

下午看过最终选品了。

《雨后的第七盏灯》这一批可以留下，作品本身不用再调整，保持现在的状态就好。

夏季主展的位置有限，这次还是以你作为主要推广对象。过去几个季度你的成交和媒体反馈都比较稳定，市场对你的名字也已经有认知，现在临时加入新的创作者，对整个展线未必是好事。

G-2025-000畫室那畫家的几件作品先留在内部，不急着公开。相关草稿、创作记录和来源资料也先照原来的方式归档，不需要跟着这一轮宣传一起出去。

至于《雨后的第七盏灯》，先放进你的展线。

登记和后续宣传我会处理。

你只需要把这次展做好。

单鸿`
  },
  {
    folder: "important",
    sender: "单鸿",
    from: "单鸿 <shanhong@wusha-studio.com>",
    to: "阿禾 <ahe@oldstudio.mail>",
    time: "2026.06.15 11:30",
    subject: "Re: 《雨后的第七盏灯》署名更正申请",
    unread: true,
    snippet: "这次署名暂时维持现状。如果你之后能够补充更完整的材料，可以再提交复核。",
    body: `阿禾，

你的申请我看过了。

目前《雨后的第七盏灯》的馆内登记、展览提交资料以及现有作者信息均已经完成归档，登记作者为柳文清。

如果你认为署名存在错误，需要提供可以明确证明该作品由你独立完成的原始资料，包括创作过程、早期版本、可核对的时间记录或其他来源证明。

仅凭画面相似、个人草稿或口头说明，目前不足以直接变更已经确认的展览资料。

考虑到预展即将开始，这次署名暂时维持现状。

如果你之后能够补充更完整的材料，可以再提交复核。

单鸿`
  },
  {
    folder: "important",
    sender: "单鸿",
    from: "单鸿 <shanhong@wusha-studio.com>",
    to: "画廊内部人员 <gallery-team@wusha-studio.com>",
    time: "2026.07.05 16:00",
    subject: "媒体采访提纲：《雨后的第七盏灯》相关问题",
    unread: false,
    snippet: "为避免不同部门回应不一致，涉及采访或外部询问时，暂按以下方向回应。",
    body: `近期可能会有媒体询问《雨后的第七盏灯》及相关署名问题。

为避免不同部门回应不一致，涉及采访或外部询问时，暂按以下方向回应：

关于作品归属
以目前正式登记及公开展览资料为准。柳文清为登记作者，暂不对内部审核过程作额外说明。

关于阿禾提出的异议
可以说明他过去曾参与画廊的日常创作及协助工作，对柳文清的作品和创作方式较为熟悉。

如被问及双方作品为何相似，可回应：

“长期处于相同创作环境，风格和构图受到影响并不罕见。”

关于近期多次申诉

如媒体追问是否存在借争议获得关注的情况，可以回应：

“近期相关讨论确实令当事人获得了比过去更多的公众关注，具体动机我们不作判断。”

单鸿`
  },
  {
    folder: "important",
    sender: "单鸿",
    from: "单鸿 <shanhong@wusha-studio.com>",
    to: "合作媒体 / 营销号 <media-list@wusha-pr.com>",
    time: "2026.08.02 10:00",
    subject: "【请协助发布】关于近期疑似抄袭柳文清作品一事",
    unread: true,
    snippet: "相关对比图我已经整理在附件。麻烦今天直接发出去。",
    attachment: "对比证据_媒体报道版.png",
    body: `各位，

今天我们发现，近期有一名不知名画手在公开渠道展示的作品，与本画廊签约画家柳文清的《雨后的第七盏灯》出现了大量高度相似的内容。

这已经不是简单的“风格接近”。

从构图、灯柱位置、人物安排，到远景山体和整体视角，重合程度都很高。

相关对比图我已经整理在附件。

麻烦今天直接发出去，标题不用太客气，可以直接围绕：

「不知名画手疑似抄袭柳文清《雨后的第七盏灯》」

或者：

「原创还是模仿？《雨后的第七盏灯》争议对比图曝光」

发布时间尽量集中在今天中午前后。

画廊不会容忍有人一边借用签约画家的作品，一边利用争议反过来损害原创作者的声誉。

对比图按附件原图使用即可。

画廊创办人兼艺术总监

单鸿`
  }
];

const trashMails = [
  {
    folder: "trash",
    sender: "阿禾",
    from: "阿禾 <ahe@oldstudio.mail>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    cc: "画廊管理层 <gallery-admin@wusha-studio.com>",
    time: "2026.06.22 23:40",
    subject: "正式确认：《雨后的第七盏灯》署名问题",
    unread: true,
    snippet: "如果现有资料还是不够，请直接告诉我还缺什么，我会继续整理。",
    body: `单鸿，

关于《雨后的第七盏灯》的署名问题，我想再正式确认一次。

这段时间我已经提交过草稿、早期版本和创作记录，也按要求申请过更正，但展厅和宣传资料上的名字到现在还是没有变化。

我知道展览已经开始推进，临时调整会很麻烦。

但我真的很难当作什么都没有发生。

这幅画从最开始的草稿，到后来一次次修改，我都还留着记录。现在看着它挂在那里，却写着另一个人的名字，我不知道自己还要拿出多少东西，才能证明它原本是谁画的。

如果现有资料还是不够，请直接告诉我还缺什么，我会继续整理。

我只是希望，在这件事继续往前之前，至少能重新核对一次来源。

我不想把事情闹大。

但如果最后连这些记录都没有意义，我也不知道还能用什么方式说明了。

麻烦你们再认真看一次。

阿禾`
  }
];

const extraMails = [
  {
    folder: "inbox",
    sender: "城市艺文中心",
    from: "城市艺文中心 <tickets@cityarts.my>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.08.23 21:50",
    subject: "电子票确认：午夜雕塑导览场",
    unread: false,
    snippet: "您的两张电子票已确认，请于入场前出示二维码。",
    body: `单鸿总监，

感谢您购买城市艺文中心“午夜雕塑导览场”门票。

场次：2026.08.28 20:30
数量：2 张
座位：自由入场
地点：城市艺文中心 B 馆

请于活动开始前十五分钟抵达入口处，现场工作人员将核对购票姓名。`
  },
  {
    folder: "inbox",
    sender: "林若笙工作室",
    from: "林若笙工作室 <studio@linruosheng.art>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.08.18 03:06",
    subject: "九月联名讲座时间确认",
    unread: true,
    snippet: "若您方便，我们希望将讲座定在 9 月第二个周末。",
    body: `单鸿总监，

您好。关于九月“材料、市场与新收藏”联名讲座，我们这边初步整理了两个可选时间：

2026.09.12 15:00
2026.09.13 11:00

讲座长度预计 70 分钟，之后保留 20 分钟问答。若您对主题名称或主持人有偏好，也可以一并告知。`
  },
  {
    folder: "inbox",
    sender: "南岸装裱",
    from: "南岸装裱 <service@nananframe.my>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.08.12 08:30",
    subject: "装裱报价单与取件时间",
    unread: false,
    snippet: "三件纸本作品的防反光玻璃报价已附在邮件正文。",
    body: `单鸿总监，

您送来的三件纸本作品已经完成尺寸复核。

防反光玻璃装裱报价如下：

42 x 59 cm：RM 420
50 x 70 cm：RM 560
60 x 90 cm：RM 780

如确认使用胡桃木框，预计 5 个工作日后可取件。`
  },
  {
    folder: "inbox",
    sender: "蓝桥印务",
    from: "蓝桥印务 <print@bluebridge.my>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.07.08 19:18",
    subject: "画册样张第三版已上传",
    unread: false,
    snippet: "封面纸张已改为 280g 珠光纸，请确认色样。",
    body: `单鸿总监，

画册第三版样张已经上传到印务预览系统。

本次调整包括：

1. 封面纸张改为 280g 珠光纸。
2. 内页黑白图版的灰阶层次重新校正。
3. 艺术家简介页行距放宽 0.5 pt。

请在明天下午 3 点前确认是否进入小批量试印。`
  },
  {
    folder: "inbox",
    sender: "陶景然",
    from: "陶景然 <tao@ceramic-atelier.com>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.06.01 10:42",
    subject: "陶艺驻留计划邀请",
    unread: false,
    snippet: "想邀请您担任本季度驻留计划的外部评审。",
    body: `单鸿，

好久不见。

我们今年的陶艺驻留计划会在 7 月开放申请，想邀请您担任本季度外部评审。评审工作主要集中在作品集初筛和最终面谈两部分，时间可以配合您的行程。

如果您有兴趣，我这周可以把计划书和评审费用说明发给您。`
  },
  {
    folder: "inbox",
    sender: "艺仓物流",
    from: "艺仓物流 <dispatch@artcrate.my>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.05.30 09:25",
    subject: "跨城运输保险确认",
    unread: false,
    snippet: "槟城至吉隆坡运输保险已生效。",
    body: `单鸿总监，

槟城至吉隆坡的作品运输保险已经生效，保单号为 AC-260530-19。

本次运输包含 4 件布面作品和 2 件小型雕塑，预计 2026.06.02 上午抵达展厅后门。

请安排工作人员在收件时检查外箱封条，并于签收单备注温湿度记录。`
  },
  {
    folder: "inbox",
    sender: "白箱空间",
    from: "白箱空间 <invitation@whiteboxgallery.my>",
    to: "单鸿 <shanhong@wusha-studio.com>",
    time: "2026.05.18 17:20",
    subject: "开幕酒会邀请：《边界之外》",
    unread: true,
    snippet: "诚邀您出席本周六晚的开幕酒会。",
    body: `单鸿总监，

白箱空间诚邀您出席新展《边界之外》开幕酒会。

时间：2026.05.23 19:30
地点：白箱空间二楼主展厅

现场将有艺术家导览及小型交流会。如需预留停车位，请回复车牌号码。`
  }
];

const folders = {
  inbox: sortMailsByTime([...requiredMails, ...extraMails]),
  important: sortMailsByTime(requiredMails),
  sent: sortMailsByTime(requiredMails.filter((mail) => mail.sender === "单鸿")),
  trash: sortMailsByTime(trashMails)
};

const list = document.getElementById("mailList");
const reader = document.getElementById("reader");
const gmailApp = document.querySelector(".gmail-app");
const gmailMenuButton = document.getElementById("gmailMenuButton");
const gmailSearchForm = document.getElementById("gmailSearchForm");
const mailSearchInput = document.getElementById("mailSearchInput");
const mailRange = document.querySelector(".mail-toolbar > span");
const toolbarCheckboxButton = document.querySelector(".toolbar-checkbox-button");
const mailMoreButton = document.getElementById("mailMoreButton");
const mailMoreMenu = document.getElementById("mailMoreMenu");
const gmailProfileButton = document.getElementById("gmailProfileButton");
const gmailProfileMenu = document.getElementById("gmailProfileMenu");
let activeFolder = "inbox";
let activeVisibleMails = folders.inbox;
const attachmentImages = {
  "对比证据_媒体报道版.png": "../assets/images/evidence/ahe-media-comparison.png"
};

function sortMailsByTime(mails) {
  return [...mails].sort((first, second) => getMailTimestamp(second.time) - getMailTimestamp(first.time));
}

function getMailTimestamp(time) {
  return new Date(time.replace(/\./g, "-").replace(" ", "T")).getTime();
}

gmailMenuButton.addEventListener("click", () => {
  gmailApp.classList.toggle("is-sidebar-collapsed");
});

gmailSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openFolder(activeFolder);
});

mailSearchInput.addEventListener("input", () => {
  openFolder(activeFolder);
});

toolbarCheckboxButton.addEventListener("click", () => {
  toolbarCheckboxButton.classList.toggle("is-selected");
});

mailMoreButton.addEventListener("click", (event) => {
  event.stopPropagation();
  gmailProfileMenu.classList.add("is-hidden");
  mailMoreMenu.classList.toggle("is-hidden");
});

mailMoreMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

gmailProfileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  mailMoreMenu.classList.add("is-hidden");
  gmailProfileMenu.classList.toggle("is-hidden");
});

gmailProfileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  gmailProfileMenu.classList.add("is-hidden");
  mailMoreMenu.classList.add("is-hidden");
});

document.querySelectorAll("[data-folder]").forEach((button) => {
  button.addEventListener("click", () => {
    activateFolder(button.dataset.folder);
    openFolder(button.dataset.folder);
  });
});

function openFolder(folder) {
  if (folder === "compose") {
    openCompose();
    return;
  }

  gmailApp.classList.remove("is-reading");
  activeFolder = folder;
  const baseMails = folders[folder] || [];
  const query = mailSearchInput.value.trim().toLowerCase();
  const mails = query
    ? baseMails.filter((mail) => mailMatchesSearch(mail, query))
    : baseMails;
  activeVisibleMails = mails;
  updateMailRange(mails.length, baseMails.length);

  if (!mails.length) {
    list.innerHTML = "";
    reader.innerHTML = `<div class="empty"><div><h2>No mail here</h2><p>${query ? "No matching messages." : "This folder has no messages."}</p></div></div>`;
    return;
  }

  list.innerHTML = mails.map((mail, index) => `
    <article class="mail-row ${mail.unread ? "unread" : ""} ${index === 0 ? "active" : ""}" data-index="${index}" role="button" tabindex="0">
      <button class="row-check" type="button" aria-label="Select mail"></button>
      <span class="row-star ${mail.folder === "important" ? "is-starred" : ""}" aria-hidden="true">${mail.folder === "important" ? "★" : "☆"}</span>
      <span class="mail-copy">
        <span class="sender">${mail.sender}</span>
        <span class="subject">${mail.subject} <em>${mail.snippet}</em></span>
      </span>
      <span class="time">${mail.time.slice(5)}</span>
    </article>
  `).join("");

  list.querySelectorAll(".mail-row").forEach((row) => {
    row.addEventListener("click", () => {
      selectMailRow(row);
    });

    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectMailRow(row);
    });
  });

  list.querySelectorAll(".row-check").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      checkbox.classList.toggle("is-selected");
    });
  });

  renderMail(mails[0]);
}

function selectMailRow(row) {
  list.querySelectorAll(".mail-row").forEach((item) => item.classList.remove("active"));
  row.classList.add("active");
  gmailApp.classList.add("is-reading");
  renderMail(activeVisibleMails[Number(row.dataset.index)]);
}

function mailMatchesSearch(mail, query) {
  return [
    mail.sender,
    mail.from,
    mail.to,
    mail.cc,
    mail.time,
    mail.subject,
    mail.snippet,
    mail.body,
    mail.attachment
  ].filter(Boolean).join(" ").toLowerCase().includes(query);
}

function updateMailRange(visibleCount, totalCount) {
  if (!mailRange) return;
  mailRange.textContent = visibleCount
    ? `1-${visibleCount} of ${totalCount}`
    : `0-0 of ${totalCount}`;
}

function openCompose() {
  list.innerHTML = "";
  gmailApp.classList.add("is-reading");
  reader.innerHTML = `
    <button class="compact-back-mail" type="button" id="compactBackCompose">Back</button>
    <form class="compose-panel compose-form" id="composeForm">
      <header>New Message</header>
      <input type="email" placeholder="To">
      <input type="text" placeholder="Subject">
      <textarea placeholder="Compose email"></textarea>
      <footer>
        <button type="submit">Send</button>
      </footer>
    </form>
  `;

  document.getElementById("composeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    activateFolder("inbox");
    openFolder("inbox");
  });

  document.getElementById("compactBackCompose").addEventListener("click", () => {
    activateFolder(activeFolder);
    openFolder(activeFolder);
  });
}

function activateFolder(folder) {
  document.querySelectorAll("[data-folder]").forEach((item) => {
    item.classList.toggle("active", item.dataset.folder === folder);
  });
}

function renderMail(mail) {
  const paragraphs = mail.body.split("\n\n").map((paragraph) => {
    if (paragraph.startsWith("-----")) {
      return `<blockquote>${paragraph.replaceAll("\n", "<br>")}</blockquote>`;
    }
    return `<p>${paragraph.replaceAll("\n", "<br>")}</p>`;
  }).join("");

  reader.innerHTML = `
    <button class="compact-back-mail" type="button" id="compactBackMail">Back</button>
    <h1>${mail.subject}</h1>
    <div class="meta">
      <strong>${mail.from}</strong><br>
      <span>to ${mail.to}${mail.cc ? ` · cc ${mail.cc}` : ""} · ${mail.time}</span>
    </div>
    ${paragraphs}
    ${mail.attachment ? `<button class="attachment" type="button" data-attachment="${mail.attachment}">${mail.attachment}</button>` : ""}
  `;

  reader.querySelectorAll("[data-attachment]").forEach((button) => {
    button.addEventListener("click", () => openAttachment(button.dataset.attachment));
  });

  document.getElementById("compactBackMail").addEventListener("click", () => {
    gmailApp.classList.remove("is-reading");
  });
}

function openAttachment(attachmentName) {
  const image = attachmentImages[attachmentName];
  if (!image) return;

  const url = `apps/image-preview.html?src=${encodeURIComponent(image)}&title=${encodeURIComponent(attachmentName)}`;
  window.parent.postMessage({
    type: "open-floating-window",
    title: attachmentName,
    url
  }, window.location.origin);
}

openFolder("inbox");
