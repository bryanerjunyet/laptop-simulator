const params = new URLSearchParams(window.location.search);
const previewTitle = document.getElementById("previewTitle");
const previewStage = document.getElementById("previewStage");
const previewImage = document.getElementById("previewImage");
const zoomLabel = document.getElementById("zoomLabel");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const resetButton = document.getElementById("resetView");

let zoom = 1;
let panX = 0;
let panY = 0;
let dragState = null;

const imageSource = params.get("src") || "";
const imageTitle = params.get("title") || "Image Preview";

previewTitle.textContent = imageTitle;
previewImage.alt = imageTitle;
previewImage.src = imageSource;

function updateView() {
  previewImage.style.setProperty("--zoom", zoom.toFixed(2));
  previewImage.style.setProperty("--pan-x", `${Math.round(panX)}px`);
  previewImage.style.setProperty("--pan-y", `${Math.round(panY)}px`);
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
}

function setZoom(nextZoom, origin = null) {
  const previousZoom = zoom;
  zoom = Math.min(5, Math.max(0.25, nextZoom));

  if (origin && previousZoom !== zoom) {
    const rect = previewStage.getBoundingClientRect();
    const offsetX = origin.clientX - (rect.left + rect.width / 2) - panX;
    const offsetY = origin.clientY - (rect.top + rect.height / 2) - panY;
    const ratio = zoom / previousZoom;
    panX -= offsetX * (ratio - 1);
    panY -= offsetY * (ratio - 1);
  }

  updateView();
}

zoomInButton.addEventListener("click", () => setZoom(zoom + 0.2));
zoomOutButton.addEventListener("click", () => setZoom(zoom - 0.2));

resetButton.addEventListener("click", () => {
  zoom = 1;
  panX = 0;
  panY = 0;
  updateView();
});

previewStage.addEventListener("wheel", (event) => {
  event.preventDefault();
  setZoom(zoom + (event.deltaY < 0 ? 0.16 : -0.16), event);
}, { passive: false });

previewStage.addEventListener("pointerdown", (event) => {
  dragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    panX,
    panY
  };
  previewStage.classList.add("is-dragging");
  previewStage.setPointerCapture(event.pointerId);
});

previewStage.addEventListener("pointermove", (event) => {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  panX = dragState.panX + event.clientX - dragState.startX;
  panY = dragState.panY + event.clientY - dragState.startY;
  updateView();
});

function stopDragging(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  if (previewStage.hasPointerCapture(event.pointerId)) {
    previewStage.releasePointerCapture(event.pointerId);
  }
  dragState = null;
  previewStage.classList.remove("is-dragging");
}

previewStage.addEventListener("pointerup", stopDragging);
previewStage.addEventListener("pointercancel", stopDragging);

previewImage.addEventListener("load", () => {
  const stageRect = previewStage.getBoundingClientRect();
  const widthRatio = (stageRect.width * 0.86) / previewImage.naturalWidth;
  const heightRatio = (stageRect.height * 0.86) / previewImage.naturalHeight;
  zoom = Math.min(1, widthRatio, heightRatio) || 1;
  panX = 0;
  panY = 0;
  updateView();
});

updateView();
