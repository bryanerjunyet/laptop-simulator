const finderData = {
  shanhong: {
    defaultFolder: "documents",
    folders: {
      documents: {
        title: "Documents",
        files: []
      },
      downloads: {
        title: "Downloads",
        files: []
      },
      archive: {
        title: "Archive",
        files: []
      }
    }
  },
  ahe: {
    defaultFolder: "downloads",
    folders: {
      downloads: {
        title: "Downloads",
        files: [
          {
            id: "ahe-comparison",
            name: "对比证据_媒体报道版.png",
            date: "2026.08.07 02:15",
            kind: "PNG Image",
            image: "../assets/images/evidence/ahe-media-comparison.png"
          }
        ]
      },
      pictures: {
        title: "Pictures",
        files: []
      }
    }
  }
};

const finderApp = document.querySelector(".finder-app");
const persona = finderData[finderApp.dataset.persona];
const folderTitle = document.getElementById("folderTitle");
const fileList = document.getElementById("fileList");
const filePreview = document.getElementById("filePreview");

document.querySelectorAll("[data-folder]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-folder]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    openFolder(button.dataset.folder);
  });
});

function openFolder(folderId) {
  const folder = persona.folders[folderId];
  if (!folder) return;

  folderTitle.textContent = folder.title;

  if (!folder.files.length) {
    fileList.innerHTML = "";
    filePreview.innerHTML = `<div class="empty-preview"><h2>No Files</h2><p>This folder is empty.</p></div>`;
    return;
  }

  fileList.innerHTML = folder.files.map((file, index) => `
    <button class="file-row ${index === 0 ? "active" : ""}" type="button" data-file-id="${file.id}">
      <span>${fileIcon(file.kind)}</span>
      <strong>${file.name}</strong>
      <small>${file.date}</small>
    </button>
  `).join("");

  fileList.querySelectorAll(".file-row").forEach((button) => {
    button.addEventListener("click", () => {
      fileList.querySelectorAll(".file-row").forEach((row) => row.classList.remove("active"));
      button.classList.add("active");
      const file = folder.files.find((item) => item.id === button.dataset.fileId);
      renderPreview(file);
    });
  });

  renderPreview(folder.files[0]);
}

function renderPreview(file) {
  if (!file) return;

  const previewBody = file.body ? `<div class="preview-body">${file.body}</div>` : "";

  filePreview.innerHTML = `
    <header>
      <div>
        <h2>${file.name}</h2>
        <p>${file.kind} · ${file.date}</p>
      </div>
    </header>
    ${file.image ? `<img class="preview-image" src="${file.image}" alt="${file.name}">` : ""}
    ${previewBody}
  `;
}

function fileIcon(kind) {
  if (kind.includes("Image")) return "IMG";
  if (kind.includes("Excel") || kind.includes("CSV")) return "XLS";
  if (kind.includes("PDF")) return "PDF";
  if (kind.includes("ZIP")) return "ZIP";
  return "DOC";
}

openFolder(persona.defaultFolder);
