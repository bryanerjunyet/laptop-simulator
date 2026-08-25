const params = new URLSearchParams(window.location.search);
const laptopId = params.get("laptop") || "default";
const storageKey = `persona_mock_notes_${laptopId}`;
const notesList = document.getElementById("notesList");
const newNoteButton = document.getElementById("newNoteButton");
const editorForm = document.getElementById("editorForm");
const emptyState = document.getElementById("emptyState");
const noteTitle = document.getElementById("noteTitle");
const noteBody = document.getElementById("noteBody");
const saveState = document.getElementById("saveState");
const deleteNoteButton = document.getElementById("deleteNoteButton");

let notes = JSON.parse(localStorage.getItem(storageKey) || "[]");
let activeId = notes[0]?.id || null;

newNoteButton.addEventListener("click", createNote);
deleteNoteButton.addEventListener("click", deleteActiveNote);

[noteTitle, noteBody].forEach((input) => {
  input.addEventListener("input", () => {
    saveActiveNote();
    renderList();
    saveState.textContent = "Saved locally";
  });
});

function createNote() {
  const note = {
    id: String(Date.now()),
    title: "",
    body: "",
    updatedAt: new Date().toISOString()
  };

  notes.unshift(note);
  activeId = note.id;
  persist();
  render();
  noteTitle.focus();
}

function deleteActiveNote() {
  if (!activeId) return;

  notes = notes.filter((note) => note.id !== activeId);
  activeId = notes[0]?.id || null;
  persist();
  render();
}

function saveActiveNote() {
  const note = getActiveNote();
  if (!note) return;

  note.title = noteTitle.value;
  note.body = noteBody.value;
  note.updatedAt = new Date().toISOString();
  persist();
}

function render() {
  renderList();
  renderEditor();
}

function renderList() {
  notesList.innerHTML = notes.map((note) => `
    <button class="note-item ${note.id === activeId ? "active" : ""}" type="button" data-note-id="${note.id}">
      <strong>${escapeHtml(note.title || "Untitled")}</strong>
      <span>${escapeHtml(getPreview(note))}</span>
    </button>
  `).join("");

  notesList.querySelectorAll(".note-item").forEach((button) => {
    button.addEventListener("click", () => {
      saveActiveNote();
      activeId = button.dataset.noteId;
      render();
    });
  });
}

function renderEditor() {
  const note = getActiveNote();
  emptyState.classList.toggle("is-hidden", Boolean(note));
  editorForm.classList.toggle("is-hidden", !note);

  if (!note) return;

  noteTitle.value = note.title;
  noteBody.value = note.body;
  saveState.textContent = "Saved locally";
}

function getActiveNote() {
  return notes.find((note) => note.id === activeId);
}

function getPreview(note) {
  return note.body || new Date(note.updatedAt).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(notes));
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

render();
