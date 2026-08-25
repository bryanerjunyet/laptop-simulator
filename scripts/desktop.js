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
      gmail: { title: "Gmail", url: "apps/gmail.html", icon: "assets/icons/gmail.png" },
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
      gmail: { title: "Gmail", url: "apps/shanhong-gmail.html", icon: "assets/icons/gmail.png" },
      chrome: { title: "Chrome", url: "apps/mock-chrome.html?laptop=shanhong", icon: "assets/icons/chrome.png" },
      calendar: { title: "Calendar", url: "apps/calendar.html", iconType: "calendar" },
      finder: { title: "Finder", url: "apps/shanhong-finder.html", icon: "assets/icons/finder.png" },
      gallery: { title: "Gallery", url: "apps/empty-gallery.html", icon: "assets/icons/gallery-photos.svg" },
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
      chrome: { title: "Chrome", url: "apps/ahe-chrome.html", icon: "assets/icons/chrome.png" },
      photoshop: { title: "Photoshop", url: "apps/ahe-photoshop.html", icon: "assets/icons/adobe-photoshop.svg" },
      calendar: { title: "Calendar", url: "apps/calendar.html", iconType: "calendar" },
      finder: { title: "Finder", url: "apps/ahe-finder.html", icon: "assets/icons/finder.png" },
      gallery: { title: "Gallery", url: "apps/ahe-gallery.html", icon: "assets/icons/gallery-photos.svg" },
      notes: { title: "Notes", url: "apps/mock-notes.html?laptop=ahe", icon: "assets/icons/notes.svg" },
      gmail: { title: "Gmail", url: "apps/empty-gmail.html", icon: "assets/icons/gmail.png" }
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

document.querySelectorAll("[data-laptop]").forEach((button) => {
  button.addEventListener("click", () => selectLaptop(button.dataset.laptop));
});

passwordPanel.addEventListener("submit", (event) => {
  event.preventDefault();
  unlockPendingLaptop();
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
  appWindow.classList.add("is-hidden");
  appWindow.classList.remove("is-minimized", "is-maximized");
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
  detailFrame.src = url;
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
  detailWindow.classList.add("is-hidden");
  detailWindow.classList.remove("is-minimized", "is-maximized");
  detailFrame.removeAttribute("src");
  detailWindowTitle.textContent = "Details";
  detailRestoreRect = null;
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

  appWindow.classList.remove("is-hidden", "is-minimized");
  updateFullscreenWindowState();
  windowTitle.textContent = app.title;
  setActiveAppName(app.title);
  appFrame.src = app.url;

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
  accountLogin.classList.add("is-password-mode");
  passwordPanel.classList.remove("is-hidden");
  passwordPanel.dataset.laptop = laptopId;
  passwordAvatar.textContent = laptop.avatar;
  passwordName.textContent = laptop.accountName;
  passwordInput.value = "";
  passwordError.textContent = "";
  applyLoginWallpaper(laptopId, laptop);
  window.setTimeout(() => passwordInput.focus(), 80);
}

function showAccounts() {
  pendingLaptopId = null;
  loginScreen.classList.remove("is-password-mode");
  applyDefaultLoginWallpaper();
  accountLogin.classList.remove("is-password-mode");
  passwordPanel.classList.add("is-hidden");
  passwordPanel.removeAttribute("data-laptop");
  passwordInput.value = "";
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
  desktopScreen.classList.remove("laptop-shanhong", "laptop-ahe");
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
  desktopIcons.className = `desktop-icons ${laptop.iconLayout || ""}`.trim();
  desktopIcons.innerHTML = appEntries.map(([appId, app]) => `
    <button class="desktop-icon" data-app="${appId}">
      ${renderAppIcon(app)}
      <span>${app.title}</span>
    </button>
  `).join("");

  dock.innerHTML = appEntries.map(([appId, app]) => `
    <button data-app="${appId}" title="${app.title}">
      ${renderAppIcon(app)}
    </button>
  `).join("");

  document.querySelectorAll("[data-app]").forEach((button) => {
    button.addEventListener("click", () => openApp(button.dataset.app));
  });

  if (laptop.note) {
    desktopNote.textContent = laptop.note;
    desktopNote.classList.remove("is-hidden");
  } else {
    desktopNote.textContent = "";
    desktopNote.classList.add("is-hidden");
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
  desktopScreen.style.setProperty("--desktop-wallpaper", `url("${laptop.wallpaper}")`);

  const discoveredWallpaper = await discoverWallpaper(laptop.wallpaperDir, laptop.wallpaper);
  if (currentLaptopId !== laptopId) return;

  desktopScreen.style.setProperty("--desktop-wallpaper", `url("${discoveredWallpaper}")`);
}

async function applyLoginWallpaper(laptopId, laptop) {
  loginScreen.style.setProperty("--login-wallpaper", `url("${laptop.wallpaper}")`);

  const discoveredWallpaper = await discoverWallpaper(laptop.wallpaperDir, laptop.wallpaper);
  if (pendingLaptopId !== laptopId) return;

  loginScreen.style.setProperty("--login-wallpaper", `url("${discoveredWallpaper}")`);
}

async function applyDefaultLoginWallpaper() {
  loginScreen.style.setProperty("--login-wallpaper", `url("${defaultLoginWallpaper}")`);

  const discoveredWallpaper = await discoverWallpaper(defaultLoginWallpaperDir, defaultLoginWallpaper);
  if (pendingLaptopId) return;

  loginScreen.style.setProperty("--login-wallpaper", `url("${discoveredWallpaper}")`);
}

async function discoverWallpaper(directory, fallback) {
  if (!directory) return fallback;

  try {
    const folderUrl = new URL(directory, window.location.href);
    const response = await fetch(folderUrl.href);
    if (!response.ok) return fallback;

    const html = await response.text();
    const documentFragment = new DOMParser().parseFromString(html, "text/html");
    const candidates = Array.from(documentFragment.querySelectorAll("a"))
      .map((link) => link.getAttribute("href") || "")
      .map((href) => new URL(href, folderUrl))
      .filter((url) => url.href.startsWith(folderUrl.href))
      .filter((url) => wallpaperExtensions.some((extension) => url.pathname.toLowerCase().endsWith(extension)))
      .sort((first, second) => first.pathname.localeCompare(second.pathname));

    return candidates[0]?.href || fallback;
  } catch {
    return fallback;
  }
}

function updateClock() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
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
