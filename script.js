document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.getElementById("calendarBody");
  const monthYearElement = document.getElementById("monthYear");
  const prevMonthButton = document.getElementById("prevMonth");
  const nextMonthButton = document.getElementById("nextMonth");

  let currentDate = new Date(); // Define currentDate outside the renderCalendar function

  function renderCalendar() {
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

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
      let cell = `<td>${day}</td>`;
      if ((day + firstDayIndex) % 7 === 0) {
        cell = "</tr><tr>";
      }
      if (
        currentDay === day &&
        currentMonth === currentMonth &&
        currentYear === currentYear
      ) {
        cell = `<td class="highlighted-day">${day}</td>`;
      }
      calendarHtml += cell;
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
