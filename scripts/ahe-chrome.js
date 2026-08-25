const tabsEl = document.getElementById("tabs");
const newTabButton = document.getElementById("newTabButton");
const address = document.getElementById("address");
const addressForm = document.getElementById("addressForm");
const reloadButton = document.getElementById("reloadButton");
const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");
const newsToast = document.getElementById("newsToast");
const homeSearchForm = document.getElementById("homeSearchForm");
const homeSearchInput = document.getElementById("homeSearchInput");
const searchMessage = document.getElementById("searchMessage");
const googleShortcut = document.getElementById("googleShortcut");
const mailShortcut = document.getElementById("mailShortcut");
const weiboSearchForm = document.getElementById("weiboSearchForm");
const weiboToast = document.getElementById("weiboToast");
const weiboLoginForm = document.getElementById("weiboLoginForm");
const weiboLoginError = document.getElementById("weiboLoginError");
const weiboFeed = document.querySelector(".weibo-feed");
const googleUrl = "https://www.google.com";
const staticPages = {
  news: {
    page: document.getElementById("newsPage"),
    title: "城市时报",
    url: "https://citytimes.my/arts/2026/05/14/ahe-plagiarism"
  },
  weibo: {
    page: document.getElementById("weiboPage"),
    title: "微博",
    url: "https://weibo.com/search?q=%23%E5%B9%B4%E8%BD%BB%E7%94%BB%E5%AE%B6%E9%98%BF%E7%A6%BE%E6%B6%89%E5%AB%8C%E6%8A%84%E8%A2%AD%23"
  },
  google: {
    page: document.getElementById("googlePage"),
    title: "New Tab",
    url: googleUrl
  }
};

let browserTabs = [
  { id: "news", page: "news", title: staticPages.news.title, url: staticPages.news.url },
  { id: "weibo", page: "weibo", title: staticPages.weibo.title, url: staticPages.weibo.url }
];
let activeTabId = "news";
let nextGoogleTabId = 1;
let newsToastTimer = null;
let weiboToastTimer = null;

newTabButton.addEventListener("click", () => {
  const tabId = `google-${nextGoogleTabId}`;
  nextGoogleTabId += 1;
  browserTabs.push({ id: tabId, page: "google", title: "New Tab", url: googleUrl, query: "" });
  activeTabId = tabId;
  renderTabs();
  renderActiveTab();
  homeSearchInput.focus();
});

addressForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (getActiveTab()?.page === "google") {
    submitGoogleSearch(address.value);
  }
});

homeSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitGoogleSearch(homeSearchInput.value);
});

reloadButton.addEventListener("click", () => {
  const activeTab = getActiveTab();
  if (!activeTab) {
    return;
  }

  if (activeTab.page === "google") {
    activeTab.query = "";
    activeTab.title = "New Tab";
    activeTab.url = googleUrl;
  }

  renderTabs();
  renderActiveTab();
});

profileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  profileMenu.classList.toggle("is-hidden");
});

profileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  profileMenu.classList.add("is-hidden");
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showNewsToast();
  });
});

document.querySelectorAll(".article-side button").forEach((button) => {
  button.addEventListener("click", () => {
    showNewsToast();
  });
});

googleShortcut.addEventListener("click", () => {
  const tabId = `google-${nextGoogleTabId}`;
  nextGoogleTabId += 1;
  browserTabs.push({ id: tabId, page: "google", title: "Google", url: googleUrl, query: "" });
  activeTabId = tabId;
  renderTabs();
  renderActiveTab();
});

mailShortcut.addEventListener("click", () => {
  window.parent.postMessage({ type: "open-persona-app", app: "gmail" }, window.location.origin);
});

weiboSearchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  showWeiboToast();
});

document.querySelectorAll(".weibo-top-inner nav button, .weibo-topic-card button, .weibo-post footer button, .comment-like, .hot-comments-title button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showWeiboToast();
  });
});

document.querySelectorAll(".weibo-left-nav button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const section = button.dataset.weiboSection;

    if (section === "feed" || section === "saved") {
      document.querySelectorAll(".weibo-left-nav button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      weiboFeed.classList.toggle("show-saved", section === "saved");
      return;
    }

    showWeiboToast();
  });
});

weiboLoginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  setWeiboLoginError("无法登录");
});

weiboLoginForm?.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim()) {
      setWeiboLoginError("无法登录");
    }
  });
});

document.querySelectorAll("[data-login-error]").forEach((button) => {
  button.addEventListener("click", () => {
    setWeiboLoginError(button.dataset.loginError);
  });
});

function renderTabs() {
  tabsEl.innerHTML = browserTabs.map((tab) => `
    <button class="tab ${tab.id === activeTabId ? "active" : ""}" type="button" data-tab-id="${tab.id}">
      <span class="tab-title">${escapeHtml(tab.title)}</span>
      <span class="tab-close" title="Close tab" aria-hidden="true">×</span>
    </button>
  `).join("");

  tabsEl.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.closest(".tab-close")) {
        closeTab(button.dataset.tabId);
        return;
      }

      activeTabId = button.dataset.tabId;
      renderTabs();
      renderActiveTab();
    });
  });
}

function closeTab(tabId) {
  const tabIndex = browserTabs.findIndex((tab) => tab.id === tabId);
  if (tabIndex === -1) {
    return;
  }

  browserTabs.splice(tabIndex, 1);

  if (browserTabs.length === 0) {
    const nextTabId = `google-${nextGoogleTabId}`;
    nextGoogleTabId += 1;
    browserTabs.push({ id: nextTabId, page: "google", title: "New Tab", url: googleUrl, query: "" });
    activeTabId = nextTabId;
  } else if (activeTabId === tabId) {
    activeTabId = browserTabs[Math.max(0, tabIndex - 1)].id;
  }

  renderTabs();
  renderActiveTab();
}

function renderActiveTab() {
  const activeTab = getActiveTab();
  if (!activeTab) {
    return;
  }

  Object.values(staticPages).forEach((pageConfig) => {
    pageConfig.page.classList.remove("active");
  });

  staticPages[activeTab.page].page.classList.add("active");
  address.value = activeTab.page === "google" ? activeTab.query || activeTab.url : activeTab.url;
  homeSearchInput.value = activeTab.page === "google" ? activeTab.query || "" : "";
  searchMessage.textContent = activeTab.page === "google" && activeTab.query ? "Search not available." : "";
}

function submitGoogleSearch(value) {
  const activeTab = getActiveTab();
  if (!activeTab || activeTab.page !== "google") {
    return;
  }

  const query = value.trim();
  activeTab.query = query;
  activeTab.title = query || "New Tab";
  activeTab.url = query ? query : googleUrl;
  renderTabs();
  renderActiveTab();
}

function getActiveTab() {
  return browserTabs.find((tab) => tab.id === activeTabId);
}

function showNewsToast(message = "用户尚未订阅此报纸") {
  if (!newsToast) {
    return;
  }

  newsToast.textContent = message;
  newsToast.classList.remove("is-hidden");
  clearTimeout(newsToastTimer);
  newsToastTimer = setTimeout(() => {
    newsToast.classList.add("is-hidden");
  }, 2000);
}

function showWeiboToast(message = "尚未登录账号") {
  if (!weiboToast) {
    return;
  }

  weiboToast.textContent = message;
  weiboToast.classList.remove("is-hidden");
  clearTimeout(weiboToastTimer);
  weiboToastTimer = setTimeout(() => {
    weiboToast.classList.add("is-hidden");
  }, 2000);
}

function setWeiboLoginError(message) {
  if (weiboLoginError) {
    weiboLoginError.textContent = message;
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

renderTabs();
renderActiveTab();
