function todaysDate() {

    const todayDate = new Date();
    const date = todayDate.getDate();


    const dateId = document.querySelector('.number-calendar');

    if (dateId) {
        dateId.textContent = `${date}`;
    }



    const days = document.querySelectorAll(".btn-day");
    let i = 0;

    while (i < days.length) {
        if (days[i].textContent == date) {
            days[i].classList.add("active");
            i = 0;
            break;
        }
        i++;
    }
}

todaysDate();

setInterval(todaysDate, 1000);