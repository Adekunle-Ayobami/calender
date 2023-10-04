document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.getElementById("calendarBody");
  const monthYearElement = document.getElementById("monthYear");
  const prevMonthButton = document.getElementById("prevMonth");
  const nextMonthButton = document.getElementById("nextMonth");

  let currentDate = new Date();

  function renderCalendar() {
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayIndex = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const monthYearString = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    monthYearElement.innerText = monthYearString;

    let calendarHtml = "";

    for (let i = 0; i < firstDayIndex; i++) {
      calendarHtml += "<td></td>";
    }

    for (let day = 1; day <= lastDay; day++) {
      calendarHtml += `<td>${day}</td>`;
      if ((day + firstDayIndex) % 7 === 0) {
        calendarHtml += "</tr><tr>";
      }
    }

    calendarBody.innerHTML = calendarHtml;
  }

  renderCalendar();

  prevMonthButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
});
