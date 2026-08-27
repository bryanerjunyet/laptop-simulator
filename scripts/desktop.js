const laptops = {
  guang: {
    name: "追光的电脑",
    accountName: "追光",
    avatar: "追",
    className: "",
    iconLayout: "",
    wallpaperDir: "assets/images/wallpapers/zhuiguang/",
    wallpaper: "assets/images/wallpapers/zhuiguang/zhuiguang-wallpaper.jpg",
    note: "",
    password: null,
    apps: {
      instagram: { title: "Instagram", url: "apps/instagram.html", icon: "assets/icons/instagram.svg" },
      gmail: { title: "Gmail", url: "apps/gmail.html", icon: "assets/icons/gmail.png", translatable: true },
      whatsapp: { title: "WhatsApp", url: "apps/whatsapp.html", icon: "assets/icons/whatsapp.svg" },
      bank: { title: "Bank", url: "apps/bank.html", icon: "assets/icons/bank.svg" },
      notes: { title: "Notes", url: "apps/notes.html", icon: "assets/icons/notes.svg" }
    }
  },
  shanhong: {
    name: "单鸿的电脑",
    accountName: "单鸿",
    avatar: "单",
    className: "laptop-shanhong",
    iconLayout: "layout-spread",
    wallpaperDir: "assets/images/wallpapers/shanhong/",
    wallpaper: "assets/images/wallpapers/shanhong/shanhong-wallpaper.jpg",
    note: "",
    passwordHash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    apps: {
      gmail: { title: "Gmail", url: "apps/shanhong-gmail.html", icon: "assets/icons/gmail.png", translatable: true },
      chrome: { title: "Chrome", url: "apps/mock-chrome.html?laptop=shanhong", icon: "assets/icons/chrome.png", translatable: true },
      calendar: { title: "Calendar", url: "apps/calendar.html", iconType: "calendar" },
      finder: { title: "Finder", url: "apps/shanhong-finder.html", icon: "assets/icons/finder.png", translatable: true },
      gallery: { title: "Gallery", url: "apps/empty-gallery.html", icon: "assets/icons/gallery-photos.svg", translatable: true },
      notes: { title: "Notes", url: "apps/mock-notes.html?laptop=shanhong", icon: "assets/icons/notes.svg" }
    }
  },
  ahe: {
    name: "阿禾的电脑",
    accountName: "阿禾",
    avatar: "禾",
    className: "laptop-ahe",
    iconLayout: "layout-studio",
    wallpaperDir: "assets/images/wallpapers/ahe/",
    wallpaper: "assets/images/wallpapers/ahe/peakpx.jpg",
    note: "",
    passwordHash: "b3a8e0e1f9ab1bfe3a36f231f676f78bb30a519d2b21e6c530c0eee8ebb4a5d0",
    apps: {
      chrome: { title: "Chrome", url: "apps/ahe-chrome.html", icon: "assets/icons/chrome.png", translatable: true },
      photoshop: { title: "Photoshop", url: "apps/ahe-photoshop.html", icon: "assets/icons/adobe-photoshop.svg", translatable: true },
      calendar: { title: "Calendar", url: "apps/calendar.html", iconType: "calendar" },
      finder: { title: "Finder", url: "apps/ahe-finder.html", icon: "assets/icons/finder.png", translatable: true },
      gallery: { title: "Gallery", url: "apps/ahe-gallery.html", icon: "assets/icons/gallery-photos.svg", translatable: true },
      notes: { title: "Notes", url: "apps/mock-notes.html?laptop=ahe", icon: "assets/icons/notes.svg" },
      gmail: { title: "Gmail", url: "apps/empty-gmail.html", icon: "assets/icons/gmail.png", translatable: true }
    }
  },
  qiongqi: {
    name: "穷奇的电脑",
    accountName: "穷奇",
    avatar: "穷",
    className: "laptop-qiongqi",
    iconLayout: "layout-qiongqi",
    wallpaperDir: "assets/images/wallpapers/qiongqi/",
    wallpaper: "assets/images/wallpapers/qiongqi/qiongqi-wallpaper.jpg",
    note: "",
    passwordHash: "c7367277e3a4a32961bd050c6c1bef7f7f94c4c8ddc064f3839ab786f1bdbebb",
    apps: {
      records: { title: "穷奇观察记录", url: "apps/qiongqi-records.html", icon: "assets/icons/qiongqi-records.svg", showOnDesktop: false, evadeBeforeOpen: true },
      chrome: { title: "Chrome", url: "apps/mock-chrome.html?laptop=qiongqi", icon: "assets/icons/chrome.png", showOnDesktop: false, translatable: true },
      gmail: { title: "Gmail", url: "apps/empty-gmail.html?laptop=qiongqi", icon: "assets/icons/gmail.png", showOnDesktop: false, translatable: true },
      gallery: { title: "Gallery", url: "apps/empty-gallery.html", icon: "assets/icons/gallery-photos.svg", showOnDesktop: false, translatable: true }
    }
  }
};

const loginScreen = document.getElementById("loginScreen");
const desktopScreen = document.getElementById("desktopScreen");
const accountLogin = document.querySelector(".account-login");
const passwordPanel = document.getElementById("passwordPanel");
const passwordAvatar = document.getElementById("passwordAvatar");
const passwordName = document.getElementById("passwordName");
const passwordInput = document.getElementById("laptopPassword");
const toggleLaptopPassword = document.getElementById("toggleLaptopPassword");
const passwordError = document.getElementById("passwordError");
const desktopIcons = document.getElementById("desktopIcons");
const dock = document.getElementById("dock");
const dockRevealZone = document.getElementById("dockRevealZone");
const desktopNote = document.getElementById("desktopNote");
const appWindow = document.getElementById("appWindow");
const appFrame = document.getElementById("appFrame");
const detailWindow = document.getElementById("detailWindow");
const detailFrame = document.getElementById("detailFrame");
const detailWindowBar = document.getElementById("detailWindowBar");
const windowTitle = document.getElementById("windowTitle");
const detailWindowTitle = document.getElementById("detailWindowTitle");
const translateWindowButton = document.getElementById("translateWindow");
const translateDetailWindowButton = document.getElementById("translateDetailWindow");
const activeAppName = document.getElementById("activeAppName");
const activeLaptopName = document.getElementById("activeLaptopName");
const clock = document.getElementById("clock");
const loginClock = document.getElementById("loginClock");
const loginBigTime = document.getElementById("loginBigTime");
const loginDate = document.getElementById("loginDate");
const windowBar = document.getElementById("windowBar");
const fullscreenButton = document.getElementById("fullscreenButton");
const securityLock = document.getElementById("securityLock");
const securityForm = document.getElementById("securityForm");
const adminPasswordInput = document.getElementById("adminPasswordInput");
const securityError = document.getElementById("securityError");
const wallpaperExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];
const adminPasswordHash = "83cf8b609de60036a8277bd0e96135751bbc07eb234256d4b65b893360651bf2";
const defaultLoginWallpaperDir = "assets/images/wallpapers/login/";
const defaultLoginWallpaper = "assets/images/wallpapers/login/login-sonoma.jpeg";

let dragState = null;
let resizeState = null;
let restoreRect = null;
let detailDragState = null;
let detailResizeState = null;
let detailRestoreRect = null;
let topWindowZ = 40;
let currentLaptopId = null;
let pendingLaptopId = null;
let activeApps = {};
let securityLocked = false;
let securityAction = null;
const resizeMargin = 10;
const minWindowWidth = 390;
const minWindowHeight = 310;
const chinesePattern = /[\u3400-\u9fff]/;
const translatableTextAttributes = ["placeholder", "title", "aria-label", "alt", "value"];
const ignoredTranslationTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"]);
const ignoredTranslationSelector = [
  "[data-no-translate]",
  ".gmail-profile",
  ".gmail-profile-menu",
  ".profile-button",
  ".profile-menu",
  ".ps-profile",
  ".ps-profile-menu"
].join(",");
const translationStates = new WeakMap();
const translationCache = new Map();
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
const fallbackTranslations = new Map([
  ...properNounGlossary,
  ["输入密码", "Enter password"],
  ["密码错误", "Incorrect password"],
  ["收件箱", "Inbox"],
  ["重要", "Important"],
  ["已发送", "Sent"],
  ["垃圾箱", "Trash"],
  ["草稿", "Drafts"],
  ["写信", "Compose"],
  ["搜索邮件", "Search mail"],
  ["发件人", "From"],
  ["收件人", "To"],
  ["抄送", "cc"],
  ["主题", "Subject"],
  ["发送", "Send"],
  ["返回", "Back"],
  ["图片预览", "Image preview"],
  ["画廊", "Gallery"],
  ["画家", "artist"],
  ["作品", "artwork"],
  ["展览", "exhibition"],
  ["草稿", "draft"],
  ["记录", "records"],
  ["署名", "attribution"],
  ["媒体", "media"],
  ["证据", "evidence"],
  ["对比图", "comparison image"],
  ["不知名画手", "unknown artist"],
  ["疑似抄袭", "suspected plagiarism"],
  ["详细信息", "Details"],
  ["常规", "General"],
  ["以前的版本", "Previous Versions"],
  ["版本历史记录", "Version History"],
  ["打开方式", "Open with"],
  ["位置", "Location"],
  ["大小", "Size"],
  ["创建时间", "Created"],
  ["修改时间", "Modified"],
  ["访问时间", "Accessed"],
  ["作者", "Author"],
  ["城市时报", "City Times"],
  ["热门评论", "Popular comments"],
  ["收藏", "Saved"],
  ["评论", "Comments"],
  ["转发", "Repost"],
  ["点赞", "Like"],
  ["登录", "Log in"]
]);

document.querySelectorAll("[data-laptop]").forEach((button) => {
  button.addEventListener("click", () => selectLaptop(button.dataset.laptop));
});

passwordPanel.addEventListener("submit", (event) => {
  event.preventDefault();
  unlockPendingLaptop();
});

toggleLaptopPassword.addEventListener("click", () => {
  const shouldShow = passwordInput.type === "password";
  passwordInput.type = shouldShow ? "text" : "password";
  toggleLaptopPassword.setAttribute("aria-pressed", String(shouldShow));
  toggleLaptopPassword.setAttribute("aria-label", shouldShow ? "Hide password" : "Show password");
});

document.getElementById("switchLaptop").addEventListener("click", () => {
  lockForAdmin(() => showLogin(), "Admin password required to log out.");
});

fullscreenButton.addEventListener("click", enterFullscreen);

securityForm.addEventListener("submit", unlockSecurity);

securityLock.addEventListener("click", (event) => {
  if (event.target === securityLock) {
    focusSecurityInput();
  }
});

securityLock.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    focusSecurityInput();
  }
});

document.addEventListener("fullscreenchange", handleFullscreenChange);

document.addEventListener("keydown", handleSecurityKeys, true);

appFrame.addEventListener("load", bindAppFrameShortcuts);

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;
  if (event.data?.type === "open-persona-app") {
    openApp(event.data.app);
    return;
  }

  if (event.data?.type === "open-floating-window") {
    openDetailWindow(event.data);
    return;
  }

});

window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && !document.fullscreenElement) {
    lockForAdmin(null, "Admin password required after leaving fullscreen.");
  }
});

document.getElementById("closeWindow").addEventListener("click", () => {
  closeAppWindow();
});

document.getElementById("minimizeWindow").addEventListener("click", () => {
  minimizeAppWindow();
});

document.getElementById("maximizeWindow").addEventListener("click", () => {
  toggleMaximizeAppWindow();
});

document.getElementById("closeDetailWindow").addEventListener("click", () => {
  closeDetailWindow();
});

document.getElementById("minimizeDetailWindow").addEventListener("click", () => {
  minimizeDetailWindow();
});

document.getElementById("maximizeDetailWindow").addEventListener("click", () => {
  toggleMaximizeDetailWindow();
});

translateWindowButton.addEventListener("click", () => {
  translateFrameToEnglish(appFrame, translateWindowButton);
});

translateDetailWindowButton.addEventListener("click", () => {
  translateFrameToEnglish(detailFrame, translateDetailWindowButton);
});

appWindow.addEventListener("pointermove", updateResizeCursor);

appWindow.addEventListener("pointerleave", () => {
  if (!resizeState) {
    appWindow.style.cursor = "";
  }
});

appWindow.addEventListener("pointerdown", startWindowResize, true);

detailWindow.addEventListener("pointermove", updateDetailResizeCursor);

detailWindow.addEventListener("pointerleave", () => {
  if (!detailResizeState) {
    detailWindow.style.cursor = "";
  }
});

detailWindow.addEventListener("pointerdown", startDetailWindowResize, true);

window.addEventListener("pointermove", resizeWindow);

window.addEventListener("pointermove", resizeDetailWindow);

desktopScreen.addEventListener("pointermove", handleEvasiveDockPointerMove);

window.addEventListener("pointerup", stopWindowResize);

window.addEventListener("pointerup", stopDetailWindowResize);

window.addEventListener("pointercancel", stopWindowResize);

window.addEventListener("pointercancel", stopDetailWindowResize);

windowBar.addEventListener("pointerdown", (event) => {
  if (resizeState || event.target.closest("button") || appWindow.classList.contains("is-maximized")) return;
  if (getResizeEdges(event)) return;

  dragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    left: appWindow.offsetLeft,
    top: appWindow.offsetTop,
    scale: getScreenScale()
  };
  windowBar.setPointerCapture(event.pointerId);
});

windowBar.addEventListener("pointermove", (event) => {
  if (!dragState || event.pointerId !== dragState.pointerId) return;

  const deltaX = (event.clientX - dragState.startX) / dragState.scale;
  const deltaY = (event.clientY - dragState.startY) / dragState.scale;
  const nextLeft = clamp(dragState.left + deltaX, 0, desktopScreen.offsetWidth - 120);
  const nextTop = clamp(dragState.top + deltaY, 32, desktopScreen.offsetHeight - 80);

  appWindow.style.left = `${nextLeft}px`;
  appWindow.style.top = `${nextTop}px`;
});

windowBar.addEventListener("pointerup", () => {
  dragState = null;
});

windowBar.addEventListener("dblclick", () => {
  document.getElementById("maximizeWindow").click();
});

detailWindowBar.addEventListener("pointerdown", (event) => {
  bringDetailWindowToFront();
  if (detailResizeState || event.target.closest("button") || detailWindow.classList.contains("is-maximized")) return;
  if (getDetailResizeEdges(event)) return;

  detailDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    left: detailWindow.offsetLeft,
    top: detailWindow.offsetTop,
    scale: getScreenScale()
  };
  detailWindowBar.setPointerCapture(event.pointerId);
});

detailWindowBar.addEventListener("pointermove", (event) => {
  if (!detailDragState || event.pointerId !== detailDragState.pointerId) return;

  const deltaX = (event.clientX - detailDragState.startX) / detailDragState.scale;
  const deltaY = (event.clientY - detailDragState.startY) / detailDragState.scale;
  const nextLeft = clamp(detailDragState.left + deltaX, 0, desktopScreen.offsetWidth - 120);
  const nextTop = clamp(detailDragState.top + deltaY, 32, desktopScreen.offsetHeight - 80);

  detailWindow.style.left = `${nextLeft}px`;
  detailWindow.style.top = `${nextTop}px`;
});

detailWindowBar.addEventListener("pointerup", () => {
  detailDragState = null;
});

detailWindowBar.addEventListener("dblclick", () => {
  document.getElementById("maximizeDetailWindow").click();
});

dockRevealZone.addEventListener("pointerenter", showDockForFullscreenWindow);
dockRevealZone.addEventListener("pointerleave", scheduleDockHide);
dock.addEventListener("pointerenter", showDockForFullscreenWindow);
dock.addEventListener("pointerleave", scheduleDockHide);

function updateResizeCursor(event) {
  if (resizeState) return;
  appWindow.style.cursor = cursorForEdges(getResizeEdges(event));
}

function updateDetailResizeCursor(event) {
  if (detailResizeState) return;
  detailWindow.style.cursor = cursorForEdges(getDetailResizeEdges(event));
}

function startWindowResize(event) {
  if (event.target.closest("button")) return;

  const edges = getResizeEdges(event);
  if (!edges) return;

  event.preventDefault();
  event.stopPropagation();

  resizeState = {
    pointerId: event.pointerId,
    edges,
    startX: event.clientX,
    startY: event.clientY,
    left: appWindow.offsetLeft,
    top: appWindow.offsetTop,
    width: appWindow.offsetWidth,
    height: appWindow.offsetHeight,
    scale: getScreenScale()
  };

  appWindow.setPointerCapture(event.pointerId);
  document.body.classList.add("is-resizing-window");
  appWindow.style.cursor = cursorForEdges(edges);
}

function startDetailWindowResize(event) {
  if (event.target.closest("button")) return;

  bringDetailWindowToFront();
  const edges = getDetailResizeEdges(event);
  if (!edges) return;

  event.preventDefault();
  event.stopPropagation();

  detailResizeState = {
    pointerId: event.pointerId,
    edges,
    startX: event.clientX,
    startY: event.clientY,
    left: detailWindow.offsetLeft,
    top: detailWindow.offsetTop,
    width: detailWindow.offsetWidth,
    height: detailWindow.offsetHeight,
    scale: getScreenScale()
  };

  detailWindow.setPointerCapture(event.pointerId);
  document.body.classList.add("is-resizing-window");
  detailWindow.style.cursor = cursorForEdges(edges);
}

function resizeWindow(event) {
  if (!resizeState || event.pointerId !== resizeState.pointerId) return;

  const deltaX = (event.clientX - resizeState.startX) / resizeState.scale;
  const deltaY = (event.clientY - resizeState.startY) / resizeState.scale;
  const maxWindowWidth = desktopScreen.offsetWidth;
  const maxWindowHeight = desktopScreen.offsetHeight;
  let left = resizeState.left;
  let top = resizeState.top;
  let width = resizeState.width;
  let height = resizeState.height;

  if (resizeState.edges.includes("e")) {
    width = clamp(resizeState.width + deltaX, minWindowWidth, maxWindowWidth - resizeState.left);
  }

  if (resizeState.edges.includes("s")) {
    height = clamp(resizeState.height + deltaY, minWindowHeight, maxWindowHeight - resizeState.top - 14);
  }

  if (resizeState.edges.includes("w")) {
    const appliedDeltaX = clamp(deltaX, -resizeState.left, resizeState.width - minWindowWidth);
    left = resizeState.left + appliedDeltaX;
    width = resizeState.width - appliedDeltaX;
  }

  if (resizeState.edges.includes("n")) {
    const appliedDeltaY = clamp(deltaY, 32 - resizeState.top, resizeState.height - minWindowHeight);
    top = resizeState.top + appliedDeltaY;
    height = resizeState.height - appliedDeltaY;
  }

  appWindow.style.left = `${left}px`;
  appWindow.style.top = `${top}px`;
  appWindow.style.width = `${width}px`;
  appWindow.style.height = `${height}px`;
}

function resizeDetailWindow(event) {
  if (!detailResizeState || event.pointerId !== detailResizeState.pointerId) return;

  const deltaX = (event.clientX - detailResizeState.startX) / detailResizeState.scale;
  const deltaY = (event.clientY - detailResizeState.startY) / detailResizeState.scale;
  const maxWindowWidth = desktopScreen.offsetWidth;
  const maxWindowHeight = desktopScreen.offsetHeight;
  let left = detailResizeState.left;
  let top = detailResizeState.top;
  let width = detailResizeState.width;
  let height = detailResizeState.height;

  if (detailResizeState.edges.includes("e")) {
    width = clamp(detailResizeState.width + deltaX, minWindowWidth, maxWindowWidth - detailResizeState.left);
  }

  if (detailResizeState.edges.includes("s")) {
    height = clamp(detailResizeState.height + deltaY, minWindowHeight, maxWindowHeight - detailResizeState.top - 14);
  }

  if (detailResizeState.edges.includes("w")) {
    const appliedDeltaX = clamp(deltaX, -detailResizeState.left, detailResizeState.width - minWindowWidth);
    left = detailResizeState.left + appliedDeltaX;
    width = detailResizeState.width - appliedDeltaX;
  }

  if (detailResizeState.edges.includes("n")) {
    const appliedDeltaY = clamp(deltaY, 32 - detailResizeState.top, detailResizeState.height - minWindowHeight);
    top = detailResizeState.top + appliedDeltaY;
    height = detailResizeState.height - appliedDeltaY;
  }

  detailWindow.style.left = `${left}px`;
  detailWindow.style.top = `${top}px`;
  detailWindow.style.width = `${width}px`;
  detailWindow.style.height = `${height}px`;
}

function stopWindowResize(event) {
  if (!resizeState || event.pointerId !== resizeState.pointerId) return;

  if (appWindow.hasPointerCapture(event.pointerId)) {
    appWindow.releasePointerCapture(event.pointerId);
  }

  resizeState = null;
  document.body.classList.remove("is-resizing-window");
  appWindow.style.cursor = "";
}

function stopDetailWindowResize(event) {
  if (!detailResizeState || event.pointerId !== detailResizeState.pointerId) return;

  if (detailWindow.hasPointerCapture(event.pointerId)) {
    detailWindow.releasePointerCapture(event.pointerId);
  }

  detailResizeState = null;
  document.body.classList.remove("is-resizing-window");
  detailWindow.style.cursor = "";
}

function getResizeEdges(event) {
  if (appWindow.classList.contains("is-hidden") || appWindow.classList.contains("is-maximized")) return "";

  const handle = event.target.closest("[data-resize-handle]");
  if (handle) return handle.dataset.resizeHandle;

  const rect = appWindow.getBoundingClientRect();
  const nearLeft = event.clientX - rect.left <= resizeMargin;
  const nearRight = rect.right - event.clientX <= resizeMargin;
  const nearTop = event.clientY - rect.top <= resizeMargin;
  const nearBottom = rect.bottom - event.clientY <= resizeMargin;
  let edges = "";

  if (nearTop) edges += "n";
  if (nearBottom) edges += "s";
  if (nearLeft) edges += "w";
  if (nearRight) edges += "e";

  return edges;
}

function getDetailResizeEdges(event) {
  if (detailWindow.classList.contains("is-hidden") || detailWindow.classList.contains("is-maximized")) return "";

  const handle = event.target.closest("[data-resize-handle]");
  if (handle) return handle.dataset.resizeHandle;

  const rect = detailWindow.getBoundingClientRect();
  const nearLeft = event.clientX - rect.left <= resizeMargin;
  const nearRight = rect.right - event.clientX <= resizeMargin;
  const nearTop = event.clientY - rect.top <= resizeMargin;
  const nearBottom = rect.bottom - event.clientY <= resizeMargin;
  let edges = "";

  if (nearTop) edges += "n";
  if (nearBottom) edges += "s";
  if (nearLeft) edges += "w";
  if (nearRight) edges += "e";

  return edges;
}

function cursorForEdges(edges) {
  if (edges === "n" || edges === "s") return "ns-resize";
  if (edges === "e" || edges === "w") return "ew-resize";
  if (edges === "ne" || edges === "sw") return "nesw-resize";
  if (edges === "nw" || edges === "se") return "nwse-resize";
  return "";
}

function restoreMaximizedWindow() {
  if (!appWindow.classList.contains("is-maximized")) return false;

  appWindow.classList.remove("is-maximized");
  if (restoreRect) {
    Object.assign(appWindow.style, restoreRect);
  }
  updateFullscreenWindowState();
  return true;
}

function updateFullscreenWindowState() {
  const isFullscreenWindow = appWindow.classList.contains("is-maximized")
    && !appWindow.classList.contains("is-hidden")
    && !appWindow.classList.contains("is-minimized");

  desktopScreen.classList.toggle("has-fullscreen-window", isFullscreenWindow);
  if (!isFullscreenWindow) {
    desktopScreen.classList.remove("is-dock-revealed");
  }
}

function showDockForFullscreenWindow() {
  if (desktopScreen.classList.contains("has-fullscreen-window")) {
    desktopScreen.classList.add("is-dock-revealed");
  }
}

function scheduleDockHide() {
  window.setTimeout(() => {
    if (dock.matches(":hover") || dockRevealZone.matches(":hover")) return;
    desktopScreen.classList.remove("is-dock-revealed");
  }, 90);
}

function closeAppWindow() {
  clearTranslationState(appFrame);
  appWindow.classList.add("is-hidden");
  appWindow.classList.remove("is-minimized", "is-maximized");
  resetTranslateButton(translateWindowButton, true);
  updateFullscreenWindowState();
  setActiveAppName("Finder");
}

function minimizeAppWindow() {
  appWindow.classList.add("is-minimized");
  updateFullscreenWindowState();
}

function toggleMaximizeAppWindow() {
  dragState = null;
  resizeState = null;
  document.body.classList.remove("is-resizing-window");

  if (restoreMaximizedWindow()) {
    return;
  }

  restoreRect = {
    left: appWindow.style.left,
    top: appWindow.style.top,
    width: appWindow.style.width,
    height: appWindow.style.height
  };
  appWindow.classList.add("is-maximized");
  updateFullscreenWindowState();
}

function openDetailWindow(detailData) {
  const title = detailData?.title || "Details";
  const url = detailData?.url;
  if (!url) return;

  bringDetailWindowToFront();
  detailWindow.classList.remove("is-hidden", "is-minimized");
  detailWindow.classList.remove("is-maximized");
  detailWindowTitle.textContent = title;
  clearTranslationState(detailFrame);
  detailFrame.src = url;
  resetTranslateButton(translateDetailWindowButton, false);
  detailRestoreRect = null;

  if (!detailWindow.style.left) {
    detailWindow.style.left = "300px";
    detailWindow.style.top = "104px";
  }
}

function bringDetailWindowToFront() {
  detailWindow.style.zIndex = `${++topWindowZ}`;
}

function closeDetailWindow() {
  resetDetailWindow();
}

function minimizeDetailWindow() {
  detailWindow.classList.add("is-minimized");
  detailWindow.classList.remove("is-maximized");
}

function toggleMaximizeDetailWindow() {
  if (detailWindow.classList.contains("is-maximized")) {
    detailWindow.classList.remove("is-maximized");
    if (detailRestoreRect) {
      Object.assign(detailWindow.style, detailRestoreRect);
    }
    return;
  }

  detailRestoreRect = {
    left: detailWindow.style.left,
    top: detailWindow.style.top,
    width: detailWindow.style.width,
    height: detailWindow.style.height
  };
  detailWindow.classList.remove("is-minimized");
  detailWindow.classList.add("is-maximized");
}

function resetDetailWindow() {
  clearTranslationState(detailFrame);
  detailWindow.classList.add("is-hidden");
  detailWindow.classList.remove("is-minimized", "is-maximized");
  detailFrame.removeAttribute("src");
  detailWindowTitle.textContent = "Details";
  resetTranslateButton(translateDetailWindowButton, true);
  detailRestoreRect = null;
}

function resetTranslateButton(button, shouldHide) {
  button.classList.toggle("is-hidden", shouldHide);
  button.classList.remove("is-busy", "is-translated");
  button.disabled = false;
  button.title = "Translate to English";
}

async function translateFrameToEnglish(frame, button) {
  if (button.disabled || button.classList.contains("is-hidden")) return;

  const frameDocument = getFrameDocument(frame);
  if (!frameDocument?.body) {
    showTranslationStatus(button, "Translation unavailable");
    return;
  }

  const existingState = translationStates.get(frameDocument);
  if (existingState?.isTranslated) {
    restoreOriginalLanguage(frameDocument, button);
    return;
  }

  const state = createTranslationState(frameDocument);
  translationStates.set(frameDocument, state);
  const entries = collectTranslationEntries(frameDocument, state);
  if (!entries.length) {
    showTranslationStatus(button, "No Chinese text found");
    return;
  }

  button.disabled = true;
  button.classList.add("is-busy");
  button.title = "Translating...";
  const progress = showTranslationProgress("Translating", entries.length);

  try {
    await translateEntries(entries, state, progress);
    observeTranslatedMutations(frameDocument, state, button);
    state.isTranslated = true;
    button.classList.add("is-translated");
    button.title = "Show original Chinese";
  } catch {
    showTranslationStatus(button, "Translation failed");
  } finally {
    hideTranslationProgress(progress);
    button.classList.remove("is-busy");
    button.disabled = false;
  }
}

function getFrameDocument(frame) {
  try {
    return frame.contentDocument;
  } catch {
    return null;
  }
}

function createTranslationState(frameDocument) {
  return {
    frameDocument,
    isTranslated: false,
    originalTextNodes: new WeakMap(),
    originalAttributes: new WeakMap(),
    restorers: [],
    observer: null,
    pendingMutationTimer: null,
    translatingMutations: false
  };
}

function collectTranslationEntries(frameDocument, state) {
  const entries = [];
  const walker = frameDocument.createTreeWalker(
    frameDocument.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ignoredTranslationTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest(ignoredTranslationSelector)) return NodeFilter.FILTER_REJECT;
        if (state?.originalTextNodes.has(node)) return NodeFilter.FILTER_REJECT;
        return chinesePattern.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    }
  );

  let textNode = walker.nextNode();
  while (textNode) {
    const text = normalizeTranslationText(textNode.nodeValue);
    if (text) {
      entries.push({ type: "text", node: textNode, text });
    }
    textNode = walker.nextNode();
  }

  frameDocument.querySelectorAll("*").forEach((element) => {
    if (ignoredTranslationTags.has(element.tagName) || element.closest(ignoredTranslationSelector)) return;
    translatableTextAttributes.forEach((attribute) => {
      const value = getTranslatableAttributeValue(element, attribute);
      if (value && chinesePattern.test(value) && !hasStoredAttributeOriginal(state, element, attribute)) {
        entries.push({ type: "attribute", element, attribute, text: normalizeTranslationText(value) });
      }
    });
  });

  return entries;
}

function getTranslatableAttributeValue(element, attribute) {
  if (attribute === "value" && "value" in element) {
    return element.value;
  }

  return element.getAttribute(attribute);
}

function normalizeTranslationText(text) {
  return text.replace(/\s+/g, " ").trim();
}

async function translateEntries(entries, state, progress = null) {
  const uniqueTexts = [...new Set(entries.map((entry) => entry.text))];
  const translationMap = await translateTexts(uniqueTexts, (completed, total) => {
    updateTranslationProgress(progress, completed, total);
  });

  entries.forEach((entry) => {
    applyTranslation(entry, translationMap.get(entry.text), state);
  });
}

async function translateTexts(texts, onProgress = null) {
  const protectedTexts = texts.map(protectProperNouns);
  const translationMap = new Map();
  const uncachedTexts = [];

  protectedTexts.forEach((text, index) => {
    const originalText = texts[index];
    if (translationCache.has(text)) {
      translationMap.set(originalText, translationCache.get(text));
      onProgress?.(translationMap.size, texts.length);
      return;
    }

    uncachedTexts.push({ originalText, protectedText: text });
  });

  if (!uncachedTexts.length) {
    return translationMap;
  }

  try {
    const translations = await translateTextsWithApi(
      uncachedTexts.map((item) => item.protectedText),
      (completed, total) => onProgress?.(translationMap.size + completed, texts.length, total)
    );
    uncachedTexts.forEach((item, index) => {
      const translated = translations[index] || item.protectedText;
      translationCache.set(item.protectedText, translated);
      translationMap.set(item.originalText, translated);
    });
  } catch {
    try {
      const translations = await translateTextsWithPublicTranslator(
        uncachedTexts.map((item) => item.protectedText),
        (completed) => onProgress?.(translationMap.size + completed, texts.length)
      );
      uncachedTexts.forEach((item, index) => {
        const translated = translations[index] || item.protectedText;
        translationCache.set(item.protectedText, translated);
        translationMap.set(item.originalText, translated);
      });
    } catch {
      uncachedTexts.forEach((item) => {
        const translated = translateTextWithFallback(item.protectedText);
        translationCache.set(item.protectedText, translated);
        translationMap.set(item.originalText, translated);
      });
    }
  }

  onProgress?.(texts.length, texts.length);
  return translationMap;
}

async function translateTextsWithApi(texts, onProgress = null) {
  const translations = [];
  const batchSize = 80;

  for (let index = 0; index < texts.length; index += batchSize) {
    const batch = texts.slice(index, index + batchSize);
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts: batch })
    });

    if (!response.ok) {
      throw new Error("Translation API unavailable");
    }

    const payload = await response.json();
    if (!Array.isArray(payload.translations) || payload.translations.length !== batch.length) {
      throw new Error("Unexpected translation response");
    }

    translations.push(...payload.translations);
    onProgress?.(translations.length, texts.length);
  }

  return translations;
}

async function translateTextsWithPublicTranslator(texts, onProgress = null) {
  let completed = 0;
  return await mapWithConcurrency(texts, 6, async (text) => {
    const translated = await translateOneWithPublicTranslator(text);
    completed += 1;
    onProgress?.(completed, texts.length);
    return translated;
  });
}

async function translateOneWithPublicTranslator(text) {
  const chunks = splitTextForTranslation(text);
  const translatedChunks = [];

  for (const chunk of chunks) {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", chunk);
    url.searchParams.set("langpair", "zh-CN|en");

    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error("Public translation service unavailable");
    }

    const payload = await response.json();
    if (payload?.responseStatus !== 200 && payload?.responseStatus !== "200") {
      throw new Error(payload?.responseDetails || "Public translation service unavailable");
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

function translateTextWithFallback(text) {
  if (fallbackTranslations.has(text)) return fallbackTranslations.get(text);

  let translated = text;
  [...fallbackTranslations.entries()]
    .sort((first, second) => second[0].length - first[0].length)
    .forEach(([source, target]) => {
      translated = translated.replaceAll(source, target);
    });

  return translated;
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

function applyTranslation(entry, translatedText, state) {
  if (!translatedText || translatedText === entry.text) return;

  if (entry.type === "text") {
    const original = entry.node.nodeValue;
    if (!state.originalTextNodes.has(entry.node)) {
      state.originalTextNodes.set(entry.node, original);
      state.restorers.push(() => {
        entry.node.nodeValue = original;
      });
    }
    const leadingSpace = original.match(/^\s*/)?.[0] || "";
    const trailingSpace = original.match(/\s*$/)?.[0] || "";
    entry.node.nodeValue = `${leadingSpace}${translatedText}${trailingSpace}`;
    return;
  }

  storeAttributeOriginal(state, entry.element, entry.attribute);
  if (entry.attribute === "value" && "value" in entry.element) {
    entry.element.value = translatedText;
    return;
  }

  entry.element.setAttribute(entry.attribute, translatedText);
}

function storeAttributeOriginal(state, element, attribute) {
  let attributes = state.originalAttributes.get(element);
  if (!attributes) {
    attributes = new Map();
    state.originalAttributes.set(element, attributes);
  }

  if (attributes.has(attribute)) return;

  const original = getTranslatableAttributeValue(element, attribute);
  attributes.set(attribute, original);
  state.restorers.push(() => {
    if (attribute === "value" && "value" in element) {
      element.value = original || "";
      return;
    }

    if (original === null) {
      element.removeAttribute(attribute);
      return;
    }

    element.setAttribute(attribute, original);
  });
}

function hasStoredAttributeOriginal(state, element, attribute) {
  return state?.originalAttributes.get(element)?.has(attribute) || false;
}

function observeTranslatedMutations(frameDocument, state, button) {
  state.observer?.disconnect();
  state.observer = new MutationObserver(() => {
    if (!state.isTranslated || state.translatingMutations) return;

    window.clearTimeout(state.pendingMutationTimer);
    state.pendingMutationTimer = window.setTimeout(async () => {
      const entries = collectTranslationEntries(frameDocument, state);
      if (!entries.length) return;

      state.translatingMutations = true;
      button.classList.add("is-busy");
      try {
        await translateEntries(entries, state);
      } finally {
        button.classList.remove("is-busy");
        state.translatingMutations = false;
      }
    }, 120);
  });

  state.observer.observe(frameDocument.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: translatableTextAttributes
  });
}

function restoreOriginalLanguage(frameDocument, button) {
  const state = translationStates.get(frameDocument);
  if (!state) return;

  state.observer?.disconnect();
  window.clearTimeout(state.pendingMutationTimer);
  [...state.restorers].reverse().forEach((restore) => restore());
  translationStates.delete(frameDocument);
  button.classList.remove("is-busy", "is-translated");
  button.disabled = false;
  button.title = "Translate to English";
}

function clearTranslationState(frame) {
  const frameDocument = getFrameDocument(frame);
  const state = frameDocument ? translationStates.get(frameDocument) : null;
  state?.observer?.disconnect();
  if (state?.pendingMutationTimer) {
    window.clearTimeout(state.pendingMutationTimer);
  }
  if (frameDocument) {
    translationStates.delete(frameDocument);
  }
}

function showTranslationProgress(label, total) {
  const startedAt = Date.now();
  const progress = document.createElement("div");
  progress.className = "translation-progress";
  progress.innerHTML = `
    <div class="translation-progress-card" role="status" aria-live="polite">
      <span class="translation-spinner" aria-hidden="true"></span>
      <strong>${label}</strong>
      <span class="translation-progress-count">0 / ${total}</span>
      <time>0.0s</time>
    </div>
  `;
  desktopScreen.append(progress);

  const timer = window.setInterval(() => {
    const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
    progress.querySelector("time").textContent = `${elapsed}s`;
  }, 100);

  progress.dataset.timer = String(timer);
  return progress;
}

function updateTranslationProgress(progress, completed, total) {
  if (!progress) return;

  const count = progress.querySelector(".translation-progress-count");
  if (count) {
    count.textContent = `${Math.min(completed, total)} / ${total}`;
  }
}

function hideTranslationProgress(progress) {
  if (!progress) return;

  window.clearInterval(Number(progress.dataset.timer));
  progress.classList.add("is-done");
  window.setTimeout(() => progress.remove(), 180);
}

function showTranslationStatus(button, message) {
  button.title = message;
  window.setTimeout(() => {
    if (!button.classList.contains("is-hidden")) {
      button.title = "Translate to English";
    }
  }, 1800);
}

function bindAppFrameShortcuts() {
  try {
    appFrame.contentDocument.addEventListener("keydown", (event) => {
      if (securityLocked) return;
      if (event.key.toLowerCase() !== "escape") return;
      if (!restoreMaximizedWindow()) return;

      event.preventDefault();
      event.stopPropagation();
    }, true);
  } catch {
    // Same-origin app pages can use this; externally hosted pages will simply skip it.
  }
}

function openApp(appName) {
  const app = activeApps[appName];
  if (!app) return;

  clearTranslationState(appFrame);
  appWindow.classList.remove("is-hidden", "is-minimized");
  updateFullscreenWindowState();
  windowTitle.textContent = app.title;
  setActiveAppName(app.title);
  appFrame.src = app.url;
  resetTranslateButton(translateWindowButton, !app.translatable);

  if (!appWindow.style.left) {
    appWindow.style.left = "210px";
    appWindow.style.top = "76px";
  }
}

function selectLaptop(laptopId) {
  const laptop = laptops[laptopId];
  if (!laptop) return;

  if (laptop.passwordHash) {
    showPassword(laptopId);
    return;
  }

  openLaptop(laptopId);
}

function showPassword(laptopId) {
  const laptop = laptops[laptopId];
  pendingLaptopId = laptopId;
  loginScreen.classList.add("is-password-mode");
  loginScreen.classList.remove("login-qiongqi");
  if (laptopId === "qiongqi") {
    loginScreen.classList.add("login-qiongqi");
  }
  accountLogin.classList.add("is-password-mode");
  passwordPanel.classList.remove("is-hidden");
  passwordPanel.dataset.laptop = laptopId;
  passwordAvatar.textContent = laptop.avatar;
  passwordName.textContent = laptop.accountName;
  passwordInput.value = "";
  passwordInput.type = "password";
  toggleLaptopPassword.setAttribute("aria-pressed", "false");
  toggleLaptopPassword.setAttribute("aria-label", "Show password");
  passwordError.textContent = "";
  applyLoginWallpaper(laptopId, laptop);
  window.setTimeout(() => passwordInput.focus(), 80);
}

function showAccounts() {
  pendingLaptopId = null;
  loginScreen.classList.remove("is-password-mode");
  loginScreen.classList.remove("login-qiongqi");
  applyDefaultLoginWallpaper();
  accountLogin.classList.remove("is-password-mode");
  passwordPanel.classList.add("is-hidden");
  passwordPanel.removeAttribute("data-laptop");
  passwordInput.value = "";
  passwordInput.type = "password";
  toggleLaptopPassword.setAttribute("aria-pressed", "false");
  toggleLaptopPassword.setAttribute("aria-label", "Show password");
  passwordError.textContent = "";
}

async function unlockPendingLaptop() {
  const laptop = laptops[pendingLaptopId];
  if (!laptop) return;

  if (await verifyPassword(passwordInput.value, laptop.passwordHash)) {
    openLaptop(pendingLaptopId);
    return;
  }

  passwordError.textContent = "密码错误";
  passwordInput.select();
}

async function verifyPassword(value, expectedHash) {
  if (!expectedHash) return false;
  return await hashText(value) === expectedHash;
}

async function enterFullscreen() {
  if (securityLocked) {
    focusSecurityInput();
    return;
  }

  if (document.fullscreenElement) return;

  try {
    await document.documentElement.requestFullscreen();
  } catch {
    window.alert("Fullscreen is blocked by the browser. Please allow fullscreen for this site.");
  }
}

function handleFullscreenChange() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.classList.toggle("is-hidden", isFullscreen || securityLocked);

  if (!isFullscreen) {
    lockForAdmin(null, "Admin password required to continue outside fullscreen.");
  }
}

function lockForAdmin(action = null, message = "") {
  securityLocked = true;
  securityAction = action;
  securityLock.classList.remove("is-hidden");
  fullscreenButton.classList.add("is-hidden");
  securityError.textContent = message;
  adminPasswordInput.value = "";
  focusSecurityInput();
}

function focusSecurityInput() {
  window.setTimeout(() => adminPasswordInput.focus(), 50);
}

async function unlockSecurity(event) {
  event.preventDefault();

  if (await verifyPassword(adminPasswordInput.value, adminPasswordHash)) {
    const action = securityAction;
    securityLocked = false;
    securityAction = null;
    securityLock.classList.add("is-hidden");
    securityError.textContent = "";
    adminPasswordInput.value = "";
    fullscreenButton.classList.toggle("is-hidden", Boolean(document.fullscreenElement));

    if (action) action();
    return;
  }

  securityError.textContent = "Admin password incorrect.";
  adminPasswordInput.select();
  focusSecurityInput();
}

function handleSecurityKeys(event) {
  if (securityLocked) {
    if (event.key !== "Tab") {
      event.stopPropagation();
    }
    return;
  }

  const key = event.key.toLowerCase();
  if (key === "escape" && restoreMaximizedWindow()) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const isReload = key === "f5" || ((event.ctrlKey || event.metaKey) && key === "r");
  const isCloseTab = (event.ctrlKey || event.metaKey) && key === "w";
  const isHistoryNav = event.altKey && (event.key === "ArrowLeft" || event.key === "ArrowRight");
  const isFullscreenKey = key === "f11" || key === "escape";

  if (!isReload && !isCloseTab && !isHistoryNav && !isFullscreenKey) return;

  event.preventDefault();
  lockForAdmin(null, "Admin password required before exiting.");
}

async function hashText(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function openLaptop(laptopId) {
  const laptop = laptops[laptopId];
  if (!laptop) return;

  currentLaptopId = laptopId;
  activeApps = laptop.apps;
  showAccounts();
  loginScreen.classList.add("is-hidden");
  desktopScreen.classList.remove("is-hidden");
  desktopScreen.classList.remove("laptop-shanhong", "laptop-ahe", "laptop-qiongqi");
  if (laptop.className) {
    desktopScreen.classList.add(laptop.className);
  }
  activeLaptopName.textContent = laptop.name;
  applyLaptopWallpaper(laptopId, laptop);
  renderDesktop(laptop);
  resetWindow();
}

function showLogin() {
  desktopScreen.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
  showAccounts();
  currentLaptopId = null;
  activeApps = {};
  resetWindow();
  setActiveAppName("Finder");
}

function resetWindow() {
  appWindow.classList.add("is-hidden");
  appWindow.classList.remove("is-minimized", "is-maximized");
  document.body.classList.remove("is-resizing-window");
  resizeState = null;
  appFrame.removeAttribute("src");
  Object.assign(appWindow.style, {
    left: "210px",
    top: "76px",
    width: "",
    height: ""
  });
  restoreRect = null;
  updateFullscreenWindowState();
  resetDetailWindow();
}

function renderDesktop(laptop) {
  const appEntries = Object.entries(laptop.apps);
  const desktopEntries = appEntries.filter(([, app]) => app.showOnDesktop !== false);
  desktopIcons.className = `desktop-icons ${laptop.iconLayout || ""}`.trim();
  desktopIcons.innerHTML = desktopEntries.map(([appId, app]) => `
    <button class="desktop-icon" data-app="${appId}">
      ${renderAppIcon(app)}
      <span>${app.title}</span>
    </button>
  `).join("");

  dock.innerHTML = appEntries.map(([appId, app]) => `
    <button data-app="${appId}" title="${app.title}" ${app.evadeBeforeOpen ? 'data-evade-app="true" data-evade-count="0" aria-disabled="true"' : ""}>
      ${renderAppIcon(app)}
    </button>
  `).join("");

  document.querySelectorAll("[data-app]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!canOpenEvasiveApp(button)) return;
      openApp(button.dataset.app);
    });
  });

  if (laptop.note) {
    desktopNote.textContent = laptop.note;
    desktopNote.classList.remove("is-hidden");
  } else {
    desktopNote.textContent = "";
    desktopNote.classList.add("is-hidden");
  }
}

function canOpenEvasiveApp(button) {
  if (!button.matches("[data-evade-app]")) return true;

  const attempts = Number(button.dataset.evadeCount || 0);
  if (attempts >= 10) return true;

  evadeDockApp(button);
  return false;
}

function handleEvasiveDockPointerMove(event) {
  if (currentLaptopId !== "qiongqi") return;

  dock.querySelectorAll("[data-evade-app]:not([data-evade-complete])").forEach((button) => {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(centerX - event.clientX, centerY - event.clientY);

    if (distance < 92) {
      evadeDockApp(button, event);
    }
  });
}

function evadeDockApp(button, event = null) {
  const now = Date.now();
  const readyAt = Number(button.dataset.evadeReadyAt || 0);
  if (now < readyAt || button.dataset.evadeComplete === "true") return;

  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const pointerX = event?.clientX ?? centerX + (Math.random() - 0.5) * 120;
  const pointerY = event?.clientY ?? centerY + (Math.random() - 0.5) * 120;
  const baseAngle = Math.atan2(centerY - pointerY, centerX - pointerX);
  const angle = baseAngle + (Math.random() - 0.5) * 1.25;
  const jump = 74 + Math.random() * 72;
  const currentX = Number(button.dataset.evadeX || 0);
  const currentY = Number(button.dataset.evadeY || 0);
  let nextX = currentX + Math.cos(angle) * jump;
  let nextY = currentY + Math.sin(angle) * jump;

  const nextCenterX = centerX + (nextX - currentX);
  const nextCenterY = centerY + (nextY - currentY);
  const margin = 38;

  if (nextCenterX < margin) nextX += margin - nextCenterX;
  if (nextCenterX > window.innerWidth - margin) nextX -= nextCenterX - (window.innerWidth - margin);
  if (nextCenterY < margin) nextY += margin - nextCenterY;
  if (nextCenterY > window.innerHeight - margin) nextY -= nextCenterY - (window.innerHeight - margin);

  const attempts = Math.min(10, Number(button.dataset.evadeCount || 0) + 1);
  button.dataset.evadeCount = String(attempts);
  button.dataset.evadeX = String(Math.round(nextX));
  button.dataset.evadeY = String(Math.round(nextY));
  button.dataset.evadeReadyAt = String(now + 260);
  button.style.setProperty("--evade-x", `${Math.round(nextX)}px`);
  button.style.setProperty("--evade-y", `${Math.round(nextY)}px`);

  if (attempts >= 10) {
    button.dataset.evadeComplete = "true";
    button.setAttribute("aria-disabled", "false");
  }
}

function renderAppIcon(app) {
  if (app.iconType === "calendar") {
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
    const day = now.getDate();
    return `
      <span class="app-icon calendar-app-icon" aria-hidden="true">
        <span>${weekday}</span>
        <strong>${day}</strong>
      </span>
    `;
  }

  return `<img class="app-icon" src="${app.icon}" alt="">`;
}

async function applyLaptopWallpaper(laptopId, laptop) {
  setWallpaper(desktopScreen, "--desktop-wallpaper", laptop.wallpaper);

  const discoveredWallpaper = await discoverWallpaper(laptop.wallpaperDir, laptop.wallpaper);
  if (currentLaptopId !== laptopId) return;

  setWallpaper(desktopScreen, "--desktop-wallpaper", discoveredWallpaper);
}

async function applyLoginWallpaper(laptopId, laptop) {
  setWallpaper(loginScreen, "--login-wallpaper", laptop.wallpaper);

  const discoveredWallpaper = await discoverWallpaper(laptop.wallpaperDir, laptop.wallpaper);
  if (pendingLaptopId !== laptopId) return;

  setWallpaper(loginScreen, "--login-wallpaper", discoveredWallpaper);
}

async function applyDefaultLoginWallpaper() {
  setWallpaper(loginScreen, "--login-wallpaper", defaultLoginWallpaper);

  const discoveredWallpaper = await discoverWallpaper(defaultLoginWallpaperDir, defaultLoginWallpaper);
  if (pendingLaptopId) return;

  setWallpaper(loginScreen, "--login-wallpaper", discoveredWallpaper);
}

async function discoverWallpaper(directory, fallback) {
  const fallbackUrl = resolveAssetUrl(fallback);
  if (!directory) return fallbackUrl;

  try {
    const folderUrl = new URL(directory, document.baseURI);
    const response = await fetch(folderUrl.href);
    if (!response.ok) return fallbackUrl;

    const html = await response.text();
    const documentFragment = new DOMParser().parseFromString(html, "text/html");
    const candidates = Array.from(documentFragment.querySelectorAll("a"))
      .map((link) => link.getAttribute("href") || "")
      .map((href) => new URL(href, folderUrl))
      .filter((url) => url.href.startsWith(folderUrl.href))
      .filter((url) => wallpaperExtensions.some((extension) => url.pathname.toLowerCase().endsWith(extension)))
      .sort((first, second) => first.pathname.localeCompare(second.pathname));

    return candidates[0]?.href || fallbackUrl;
  } catch {
    return fallbackUrl;
  }
}

function setWallpaper(element, property, path) {
  element.style.setProperty(property, `url("${resolveAssetUrl(path)}")`);
}

function resolveAssetUrl(path) {
  return new URL(String(path).replace(/\\/g, "/"), document.baseURI).href;
}

function updateClock() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    hour12: false
  });
  const currentDate = now.toLocaleDateString("zh-CN", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  if (clock) clock.textContent = currentTime;
  if (loginClock) loginClock.textContent = currentTime;
  if (loginBigTime) loginBigTime.textContent = currentTime;
  if (loginDate) loginDate.textContent = currentDate;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function getScreenScale() {
  const scale = desktopScreen.getBoundingClientRect().width / desktopScreen.offsetWidth;
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function setActiveAppName(name) {
  if (activeAppName) {
    activeAppName.textContent = name;
  }
}

updateClock();
applyDefaultLoginWallpaper();
setInterval(updateClock, 1000);
