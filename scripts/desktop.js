const apps = {
  instagram: { title: "Instagram", url: "apps/instagram.html" },
  gmail: { title: "Gmail", url: "apps/gmail.html" },
  whatsapp: { title: "WhatsApp", url: "apps/whatsapp.html" },
  bank: { title: "Bank", url: "apps/bank.html" },
  notes: { title: "Notes", url: "apps/notes.html" }
};

const appWindow = document.getElementById("appWindow");
const appFrame = document.getElementById("appFrame");
const windowTitle = document.getElementById("windowTitle");
const activeAppName = document.getElementById("activeAppName");
const clock = document.getElementById("clock");
const windowBar = document.getElementById("windowBar");

let dragState = null;
let restoreRect = null;

document.querySelectorAll("[data-app]").forEach((button) => {
  button.addEventListener("click", () => openApp(button.dataset.app));
});

document.getElementById("closeWindow").addEventListener("click", () => {
  appWindow.classList.add("is-hidden");
  appWindow.classList.remove("is-minimized");
  setActiveAppName("Finder");
});

document.getElementById("minimizeWindow").addEventListener("click", () => {
  appWindow.classList.add("is-minimized");
});

document.getElementById("maximizeWindow").addEventListener("click", () => {
  if (appWindow.classList.contains("is-maximized")) {
    appWindow.classList.remove("is-maximized");
    if (restoreRect) {
      Object.assign(appWindow.style, restoreRect);
    }
    return;
  }

  restoreRect = {
    left: appWindow.style.left,
    top: appWindow.style.top,
    width: appWindow.style.width,
    height: appWindow.style.height
  };
  appWindow.classList.add("is-maximized");
});

windowBar.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button") || appWindow.classList.contains("is-maximized")) return;

  dragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    left: appWindow.offsetLeft,
    top: appWindow.offsetTop
  };
  windowBar.setPointerCapture(event.pointerId);
});

windowBar.addEventListener("pointermove", (event) => {
  if (!dragState || event.pointerId !== dragState.pointerId) return;

  const nextLeft = clamp(dragState.left + event.clientX - dragState.startX, 0, window.innerWidth - 120);
  const nextTop = clamp(dragState.top + event.clientY - dragState.startY, 32, window.innerHeight - 80);

  appWindow.style.left = `${nextLeft}px`;
  appWindow.style.top = `${nextTop}px`;
});

windowBar.addEventListener("pointerup", () => {
  dragState = null;
});

windowBar.addEventListener("dblclick", () => {
  document.getElementById("maximizeWindow").click();
});

function openApp(appName) {
  const app = apps[appName];
  if (!app) return;

  appWindow.classList.remove("is-hidden", "is-minimized");
  windowTitle.textContent = app.title;
  setActiveAppName(app.title);
  appFrame.src = app.url;

  if (!appWindow.style.left) {
    appWindow.style.left = "210px";
    appWindow.style.top = "76px";
  }
}

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function setActiveAppName(name) {
  if (activeAppName) {
    activeAppName.textContent = name;
  }
}

updateClock();
setInterval(updateClock, 1000);

const initialApp = window.location.hash.replace("#", "");
if (apps[initialApp]) {
  openApp(initialApp);
}
