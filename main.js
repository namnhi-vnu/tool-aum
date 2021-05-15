// select cart html

const dates = document.querySelector('.date');
const months = document.querySelector('.month');
const years = document.querySelector('.year');

const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const active = document.querySelectorAll('.notification');
const desc = document.querySelector('.desc');

function ActiveFrontEnd() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();


    for (var i = 0; i <= active.length; i++) {
        if (hour >= 8 && hour < 12) {
            active[0].classList.add('active');
            desc.style.display = block;
        } else if (hour >= 12 && hour < 17) {
            active[0].classList.add('active');
            active[1].classList.add('active');
            desc.innerText = 'Đã Chấm Công';
        } else if (hour >= 17 && hour <= 23 && minute < 59) {
            active[0].classList.add('active');
            active[1].classList.add('active');
            active[2].classList.add('active');
            desc.innerText = 'Đã Chấm Công';

        }
    }
}



// function Post Data
function setTimess() {

    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const day = new Date().getDay() + 1;

    // export data
    hours.innerHTML = (hour < 10) ? '0' + hour : hour;
    minutes.innerHTML = (minute < 10) ? '0' + minute : minute;
    seconds.innerHTML = (second < 10) ? '0' + second : second;
    if (hour === 7 && minute === 45 && second === 0 && day <= 7 && day > 0) {
        /**
         * New Data auto
         */
        var formData = new FormData();
        formData.append('entry.196786207', 'Hoàng Anh Văn');
        formData.append('entry.718595202', 'Dev');
        formData.append('entry.1580319989', 'Sáng');
        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbx7aa2dCwLKuo4Ksy5EppGKEx5cOvvD1aXuzJBSj3MjSVxg/formResponse");
        request.send(formData);
        const modifi = document.querySelector('.app_desc');

    } else if (hour === 12 && minute === 00 && second === 0 && day <= 7 && day > 0) {
        /**
         * New Data auto
         */
        var formData = new FormData();
        formData.append('entry.196786207', 'Hoàng Anh Văn');
        formData.append('entry.718595202', 'Dev');
        formData.append('entry.1580319989', 'Trưa');
        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbx7aa2dCwLKuo4Ksy5EppGKEx5cOvvD1aXuzJBSj3MjSVxg/formResponse");
        request.send(formData);

    } else if (hour === 17 && minute === 10 && second === 0 && day !== 7 && day > 0) {
        /**
         * New Data auto
         */
        var formData = new FormData();
        formData.append('entry.196786207', 'Hoàng Anh Văn');
        formData.append('entry.718595202', 'Dev');
        formData.append('entry.1580319989', 'Tan Làm');

        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbx7aa2dCwLKuo4Ksy5EppGKEx5cOvvD1aXuzJBSj3MjSVxg/formResponse");
        request.send(formData);

    }

    const d = new Date().getDate();
    const m = new Date().getMonth() + 1;
    const y = new Date().getFullYear();

    dates.innerHTML = d;
    months.innerHTML = m;
    years.innerHTML = y;
}
setInterval(setTimess, 1000);
setInterval(ActiveFrontEnd, 1000);