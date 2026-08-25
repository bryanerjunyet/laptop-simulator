const detailView = document.getElementById("detailView");
const psModal = document.getElementById("psModal");
let modalTimer = null;

document.querySelectorAll("[data-detail-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    detailView.dataset.activeTab = button.dataset.detailTab;
    document.querySelectorAll("[data-detail-tab]").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".version-history tbody tr").forEach((row) => {
  row.addEventListener("click", () => {
    document.querySelectorAll(".version-history tbody tr").forEach((item) => item.classList.remove("is-selected"));
    row.classList.add("is-selected");
  });
});

document.querySelectorAll("[data-ps-message]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showModal(button.dataset.psMessage);
  });
});

function showModal(message) {
  psModal.textContent = message;
  psModal.classList.remove("is-hidden");
  clearTimeout(modalTimer);
  modalTimer = setTimeout(() => {
    psModal.classList.add("is-hidden");
  }, 1800);
}
