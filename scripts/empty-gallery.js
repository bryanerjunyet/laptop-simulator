const galleryPage = document.getElementById("galleryPage");
const emptyGalleryPages = {
  library: ["No Photos", "The gallery library is empty."],
  albums: ["No Albums", "There are no albums yet."],
  imports: ["No Imports", "No imported photos are available."]
};

document.querySelectorAll("[data-gallery-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-gallery-tab]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const [title, copy] = emptyGalleryPages[button.dataset.galleryTab];
    galleryPage.innerHTML = `<h1>${title}</h1><p>${copy}</p>`;
  });
});
