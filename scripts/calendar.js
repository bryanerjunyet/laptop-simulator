const monthTitle = document.getElementById("monthTitle");
const calendarContent = document.getElementById("calendarContent");
const weekdayRow = document.getElementById("weekdayRow");
const previousMonth = document.getElementById("previousMonth");
const nextMonth = document.getElementById("nextMonth");
const todayButton = document.querySelector(".today-button");
const viewButtons = document.querySelectorAll("[data-calendar-view]");
const today = new Date();

let visibleDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
let activeView = "month";

previousMonth.addEventListener("click", () => {
  visibleDate = moveDate(visibleDate, -1);
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  visibleDate = moveDate(visibleDate, 1);
  renderCalendar();
});

todayButton.addEventListener("click", () => {
  visibleDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  renderCalendar();
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.calendarView;
    viewButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCalendar();
  });
});

function renderCalendar() {
  calendarContent.className = `calendar-content ${activeView}-view`;
  weekdayRow.classList.toggle("is-hidden", activeView !== "month");

  if (activeView === "day") renderDayView();
  if (activeView === "week") renderWeekView();
  if (activeView === "month") renderMonthView();
  if (activeView === "year") renderYearView();
}

function renderDayView() {
  monthTitle.textContent = visibleDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  calendarContent.innerHTML = `
    <article class="day-panel ${isSameDay(visibleDate, today) ? "is-today" : ""}">
      <span>${visibleDate.toLocaleDateString("en-US", { weekday: "long" })}</span>
      <strong>${visibleDate.getDate()}</strong>
      <p>No events scheduled.</p>
    </article>
  `;
}

function renderWeekView() {
  const start = getWeekStart(visibleDate);
  const end = addDays(start, 6);
  monthTitle.textContent = `${formatShortDate(start)} - ${formatShortDate(end)}`;

  calendarContent.innerHTML = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(start, index);
    return `
      <article class="week-day ${isSameDay(date, today) ? "is-today" : ""}">
        <span>${date.toLocaleDateString("en-US", { weekday: "short" })}</span>
        <strong>${date.getDate()}</strong>
        <p>No events</p>
      </article>
    `;
  }).join("");
}

function renderMonthView() {
  const year = visibleDate.getFullYear();
  const month = visibleDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const gridStart = new Date(year, month, 1 - firstDay.getDay());

  monthTitle.textContent = visibleDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  calendarContent.innerHTML = Array.from({ length: 42 }, (_, index) => {
    const cellDate = addDays(gridStart, index);
    const isCurrentMonth = cellDate.getMonth() === month;

    return `
      <article class="day-cell ${isCurrentMonth ? "" : "is-muted"} ${isSameDay(cellDate, today) ? "is-today" : ""}">
        <span class="day-number">${cellDate.getDate()}</span>
      </article>
    `;
  }).join("");
}

function renderYearView() {
  const year = visibleDate.getFullYear();
  monthTitle.textContent = String(year);

  calendarContent.innerHTML = Array.from({ length: 12 }, (_, month) => {
    const date = new Date(year, month, 1);
    const monthStart = new Date(year, month, 1 - date.getDay());

    return `
      <article class="year-month">
        <h2>${date.toLocaleDateString("en-US", { month: "long" })}</h2>
        <div class="mini-weekdays"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
        <div class="mini-month">
          ${Array.from({ length: 42 }, (_, index) => {
            const cellDate = addDays(monthStart, index);
            const isCurrentMonth = cellDate.getMonth() === month;
            return `<span class="${isCurrentMonth ? "" : "is-muted"} ${isSameDay(cellDate, today) ? "is-today" : ""}">${cellDate.getDate()}</span>`;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function moveDate(date, direction) {
  if (activeView === "day") return addDays(date, direction);
  if (activeView === "week") return addDays(date, direction * 7);
  if (activeView === "year") return new Date(date.getFullYear() + direction, date.getMonth(), 1);
  return new Date(date.getFullYear(), date.getMonth() + direction, 1);
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getWeekStart(date) {
  return addDays(date, -date.getDay());
}

function isSameDay(first, second) {
  return first.toDateString() === second.toDateString();
}

function formatShortDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}

renderCalendar();
