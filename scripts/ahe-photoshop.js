const homeView = document.getElementById("homeView");
const psSearchForm = document.getElementById("psSearchForm");
const psSearchInput = document.getElementById("psSearchInput");
const psProfileButton = document.getElementById("psProfileButton");
const psProfileMenu = document.getElementById("psProfileMenu");
const psModal = document.getElementById("psModal");
let modalTimer = null;

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => openProjectDetails());
});

document.querySelectorAll("[data-home-section]").forEach((button) => {
  button.addEventListener("click", () => {
    switchHomeSection(button.dataset.homeSection);
  });
});

document.querySelectorAll("[data-home-section-shortcut]").forEach((button) => {
  button.addEventListener("click", () => {
    switchHomeSection(button.dataset.homeSectionShortcut);
  });
});

document.querySelectorAll("[data-ps-message]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showModal(button.dataset.psMessage);
  });
});

psSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterProjects();
});

psSearchInput.addEventListener("input", filterProjects);

psProfileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  psProfileMenu.classList.toggle("is-hidden");
});

psProfileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  psProfileMenu.classList.add("is-hidden");
});

function openProjectDetails() {
  window.parent.postMessage({
    type: "open-floating-window",
    title: "原始绘画文件.psd - 详细信息",
    url: "apps/ahe-photoshop-detail.html"
  }, window.location.origin);
}

function switchHomeSection(sectionName) {
  document.querySelectorAll("[data-home-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.homeSection === sectionName);
  });

  document.querySelectorAll("[data-section-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.sectionPanel === sectionName);
  });
}

function filterProjects() {
  const query = psSearchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll("[data-open-project]").forEach((project) => {
    const isMatch = !query || project.dataset.projectName.toLowerCase().includes(query);
    project.classList.toggle("is-hidden", !isMatch);
    if (isMatch) {
      visibleCount += 1;
    }
  });

  if (query && visibleCount === 0) {
    showModal("没有找到匹配的文件");
  }
}

function showModal(message) {
  psModal.textContent = message;
  psModal.classList.remove("is-hidden");
  clearTimeout(modalTimer);
  modalTimer = setTimeout(() => {
    psModal.classList.add("is-hidden");
  }, 1800);
}
