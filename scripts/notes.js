const defaultNotes = {
  today: {
    title: "Today",
    body: `再坚持一下。

今天又收到一封拒绝信。
没有很意外，但还是会难过。

明天练两个小时，不要让嗓子太累。
如果真的没有人听，也至少要把这首歌唱完。`
  },
  lyrics: {
    title: "Untitled Lyrics",
    body: `灯暗下来以后
我听见自己的呼吸
台下没有掌声
但心跳还在继续`
  },
  budget: {
    title: "Budget",
    body: `Rent: RM180 overdue
Food: keep below RM15/day
Transport: only LRT
Phone bill: failed autopay

Need one paid gig this week.`
  },
  free: {
    title: "Your Note",
    body: "Type anything here. This note saves in this browser."
  }
};

let notes = JSON.parse(localStorage.getItem("mock_notes") || "null") || defaultNotes;
let active = "today";

const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const saveState = document.getElementById("saveState");

document.querySelectorAll(".note-item").forEach((button) => {
  button.addEventListener("click", () => {
    saveActive();
    document.querySelectorAll(".note-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    active = button.dataset.note;
    renderNote();
  });
});

[titleInput, bodyInput].forEach((input) => {
  input.addEventListener("input", () => {
    saveActive();
    saveState.textContent = "Saved locally";
  });
});

function renderNote() {
  titleInput.value = notes[active].title;
  bodyInput.value = notes[active].body;
}

function saveActive() {
  notes[active] = {
    title: titleInput.value,
    body: bodyInput.value
  };
  localStorage.setItem("mock_notes", JSON.stringify(notes));
}

renderNote();
