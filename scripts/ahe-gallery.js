const galleryPage = document.getElementById("galleryPage");
const downloadsPage = galleryPage.innerHTML;
const galleryPages = {
  downloads: downloadsPage,
  screenshots: `<div class="gallery-empty"><h1>No Screenshots</h1><p>No screenshots are saved here.</p></div>`,
  archive: `<div class="gallery-empty"><h1>No Archive</h1><p>The archive is empty.</p></div>`
};

document.querySelectorAll("[data-gallery-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-gallery-tab]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    galleryPage.innerHTML = galleryPages[button.dataset.galleryTab];
  });
});
