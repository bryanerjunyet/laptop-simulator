const tabsEl = document.getElementById("tabs");
const newTabButton = document.getElementById("newTabButton");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const homeSearchForm = document.getElementById("homeSearchForm");
const homeSearchInput = document.getElementById("homeSearchInput");
const searchMessage = document.getElementById("searchMessage");
const reloadButton = document.getElementById("reloadButton");
const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");
const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const googleShortcut = document.getElementById("googleShortcut");
const mailShortcut = document.getElementById("mailShortcut");
const personas = {
  shanhong: { initial: "单", name: "单鸿", email: "shanhong@wusha-studio.com", color: "#7b4a28", label: "单鸿 Chrome profile" },
  ahe: { initial: "禾", name: "阿禾", email: "ahe@oldstudio.mail", color: "#3d697c", label: "阿禾 Chrome profile" },
  guang: { initial: "追", name: "追光", email: "zhuiguang@mail.com", color: "#9b4454", label: "追光 Chrome profile" },
  qiongqi: { initial: "穷", name: "穷奇", email: "qiongqi@archive.local", color: "#c39a32", label: "穷奇 Chrome profile" }
};
const currentPersona = personas[new URLSearchParams(window.location.search).get("laptop")] || personas.shanhong;

let tabs = [{ id: 1, title: "New Tab", query: "" }];
let activeTabId = 1;
let nextTabId = 2;

profileButton.textContent = currentPersona.initial;
profileButton.style.setProperty("--profile-color", currentPersona.color);
profileButton.setAttribute("aria-label", currentPersona.label);
profileAvatar.textContent = currentPersona.initial;
profileAvatar.style.setProperty("--profile-color", currentPersona.color);
profileName.textContent = currentPersona.name;
profileEmail.textContent = currentPersona.email;

newTabButton.addEventListener("click", () => {
  tabs.push({ id: nextTabId, title: "New Tab", query: "" });
  activeTabId = nextTabId;
  nextTabId += 1;
  renderTabs();
  renderActiveTab();
  homeSearchInput.focus();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSearch(searchInput.value);
});

homeSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSearch(homeSearchInput.value);
});

reloadButton.addEventListener("click", () => {
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  if (!activeTab) return;

  activeTab.query = "";
  activeTab.title = "New Tab";
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

googleShortcut.addEventListener("click", () => {
  tabs.push({ id: nextTabId, title: "Google", query: "" });
  activeTabId = nextTabId;
  nextTabId += 1;
  renderTabs();
  renderActiveTab();
});

mailShortcut.addEventListener("click", () => {
  window.parent.postMessage({ type: "open-persona-app", app: "gmail" }, window.location.origin);
});

function submitSearch(value) {
  const query = value.trim();
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  if (!activeTab) return;

  activeTab.query = query;
  activeTab.title = query || "New Tab";
  searchMessage.textContent = query ? "Search not available." : "";
  renderTabs();
  renderActiveTab();
}

function renderTabs() {
  tabsEl.innerHTML = tabs.map((tab) => `
    <button class="tab ${tab.id === activeTabId ? "active" : ""}" type="button" data-tab-id="${tab.id}">
      <span class="tab-title">${escapeHtml(tab.title)}</span>
      <span class="tab-close" title="Close tab" aria-hidden="true">×</span>
    </button>
  `).join("");

  tabsEl.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.closest(".tab-close")) {
        closeTab(Number(button.dataset.tabId));
        return;
      }

      activeTabId = Number(button.dataset.tabId);
      renderTabs();
      renderActiveTab();
    });
  });
}

function closeTab(tabId) {
  const tabIndex = tabs.findIndex((tab) => tab.id === tabId);
  if (tabIndex === -1) {
    return;
  }

  tabs.splice(tabIndex, 1);

  if (tabs.length === 0) {
    tabs.push({ id: nextTabId, title: "New Tab", query: "" });
    activeTabId = nextTabId;
    nextTabId += 1;
  } else if (activeTabId === tabId) {
    activeTabId = tabs[Math.max(0, tabIndex - 1)].id;
  }

  renderTabs();
  renderActiveTab();
}

function renderActiveTab() {
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  const query = activeTab?.query || "";
  searchInput.value = query;
  homeSearchInput.value = query;
  searchMessage.textContent = query ? "Search not available." : "";
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
