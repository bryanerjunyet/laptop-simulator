const tabButtons = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");
const app = document.querySelector(".qiongqi-app");
const lastRecordShell = document.getElementById("lastRecordShell");
const lastRecordText = document.getElementById("lastRecordText");
const finalStage = document.getElementById("finalStage");
const finalRecord = document.querySelector(".final-record");

const lastRecord = `六百多年。
见过求名的，求利的，求赏的。
也见过把欲望藏进笔墨里，再称它为“真”的。
看得久了，也就不信了。
直到阿禾。
没人看，他也画。
没人夸，他也画。
画坏了，揉掉。
画好了，留下。
不求什么。
我观察了他很久。
原来真的有人，
只是因为想画，所以画。
……
我曾以为，找到一个便够了。
至少能证明这六百多年，
我没有看错“真”这个字。
后来，单鸿拿走了他的画。
画还在。
名字卻不是他的了
……
这几日，我一直在想一件事。
若真的东西，也可以被一个人轻易变成假的——
那我这六百多年，究竟在守什么？
阿禾已经不画了。
我也忽然不想再找了。
你是怎麽毀掉“真”，我就怎麽毀掉你...`;

let typewriterTimer = null;
let hasTypedLastRecord = false;
let lastRecordCharacters = [];

function setActiveTab(tabName) {
  app.dataset.activeTab = tabName;

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tabName);
  });

  if (tabName === "last" && !hasTypedLastRecord) {
    startLastRecord();
  }
}

function startLastRecord() {
  window.clearTimeout(typewriterTimer);
  hasTypedLastRecord = true;
  lastRecordShell.classList.remove("is-complete");
  lastRecordText.textContent = "";

  let index = 0;

  function typeNextCharacter() {
    const character = lastRecord[index];
    lastRecordText.textContent += character;
    index += 1;
    lastRecordShell.scrollTop = lastRecordShell.scrollHeight;

    if (index >= lastRecord.length) {
      lastRecordShell.classList.add("is-complete");
      return;
    }

    const nextCharacter = lastRecord[index - 1];
    const delay = "。？！……\n".includes(nextCharacter) ? 120 : 34;
    typewriterTimer = window.setTimeout(typeNextCharacter, delay);
  }

  typewriterTimer = window.setTimeout(typeNextCharacter, 260);
}

function prepareRepellableLastRecord() {
  const fragment = document.createDocumentFragment();
  lastRecordCharacters = [];

  Array.from(lastRecordText.textContent || lastRecord).forEach((character) => {
    if (character === "\n") {
      fragment.appendChild(document.createTextNode("\n"));
      return;
    }

    const span = document.createElement("span");
    span.className = "repellable-char";
    span.textContent = character === " " ? "\u00a0" : character;
    span.dataset.repelX = "0";
    span.dataset.repelY = "0";
    span.dataset.repelRotate = "0";
    fragment.appendChild(span);
    lastRecordCharacters.push(span);
  });

  lastRecordText.replaceChildren(fragment);
}

function repelLastRecordCharacters(event) {
  if (!lastRecordShell.classList.contains("is-complete")) return;
  if (!lastRecordCharacters.length) {
    prepareRepellableLastRecord();
  }

  lastRecordCharacters.forEach((character) => {
    const rect = character.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(centerX - event.clientX, centerY - event.clientY);
    if (distance > 82) return;

    const angle = Math.atan2(centerY - event.clientY, centerX - event.clientX) + (Math.random() - 0.5) * 1.35;
    const force = (1 - distance / 82) * (42 + Math.random() * 36);
    const nextX = Number(character.dataset.repelX || 0) + Math.cos(angle) * force + (Math.random() - 0.5) * 20;
    const nextY = Number(character.dataset.repelY || 0) + Math.sin(angle) * force + (Math.random() - 0.5) * 24;
    const nextRotate = Number(character.dataset.repelRotate || 0) + (Math.random() - 0.5) * 34;

    character.dataset.repelX = String(Math.round(nextX));
    character.dataset.repelY = String(Math.round(nextY));
    character.dataset.repelRotate = String(Math.round(nextRotate));
    character.style.setProperty("--repel-x", `${Math.round(nextX)}px`);
    character.style.setProperty("--repel-y", `${Math.round(nextY)}px`);
    character.style.setProperty("--repel-rotate", `${Math.round(nextRotate)}deg`);
  });
}

function updateTorchPosition(event) {
  const stageRect = finalStage.getBoundingClientRect();
  const recordRect = finalRecord.getBoundingClientRect();
  finalStage.style.setProperty("--torch-x", `${event.clientX - stageRect.left}px`);
  finalStage.style.setProperty("--torch-y", `${event.clientY - stageRect.top + finalStage.scrollTop}px`);
  finalRecord.style.setProperty("--record-torch-x", `${event.clientX - recordRect.left}px`);
  finalRecord.style.setProperty("--record-torch-y", `${event.clientY - recordRect.top}px`);
}

function hideTorch() {
  finalStage.style.setProperty("--torch-x", "-220px");
  finalStage.style.setProperty("--torch-y", "-220px");
  finalRecord.style.setProperty("--record-torch-x", "-220px");
  finalRecord.style.setProperty("--record-torch-y", "-220px");
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

lastRecordShell.addEventListener("pointermove", repelLastRecordCharacters);
finalStage.addEventListener("pointermove", updateTorchPosition);
finalStage.addEventListener("pointerleave", hideTorch);
finalStage.addEventListener("scroll", hideTorch, { passive: true });
