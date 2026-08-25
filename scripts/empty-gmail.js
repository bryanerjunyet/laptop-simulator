const folders = {
  inbox: [],
  sent: [],
  drafts: [],
  trash: []
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
  updateMailRange(0, folders[folder]?.length || 0);
  list.innerHTML = "";
  reader.innerHTML = `<div class="empty"><div><h2>No mail here</h2><p>This folder has no messages.</p></div></div>`;
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

openFolder("inbox");
