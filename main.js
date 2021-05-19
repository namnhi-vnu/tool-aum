// select cart html

const dates = document.querySelector('.date');
const months = document.querySelector('.month');
const years = document.querySelector('.year');
const appcontent = document.querySelector('.app__content');
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const active = document.querySelectorAll('.notification');
const descs = document.querySelector('.desc');
const appdescs = document.querySelector('.app__descs');

function ActiveFrontEnd() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    for (var i = 0; i <= active.length; i++) {
        if (hour >= 8 && hour < 12) {
            active[0].classList.add('active');
            if (second === 0) {
                descs.style.display = block;
            }
        } else if (hour >= 12 && hour < 17) {
            active[0].classList.add('active');
            active[1].classList.add('active');
            descs.innerText = 'Đã Chấm Công';
        } else if (hour >= 17 && hour <= 23 && minute < 59) {
            active[0].classList.add('active');
            active[1].classList.add('active');
            active[2].classList.add('active');
            descs.innerText = 'Đã Chấm Công';

        }
    }
}

// function Post Data
function setTimess() {

    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const day = new Date().getDay();

    //console.log(day);
    // export data
    hours.innerHTML = (hour < 10) ? '0' + hour : hour;
    minutes.innerHTML = (minute < 10) ? '0' + minute : minute;
    seconds.innerHTML = (second < 10) ? '0' + second : second;
    // one
    if (day === 0) {
        appcontent.style.display = 'none';
    } else if (day > 0 && day < 6) {
        appdescs.style.display = 'none';
        if (hour === 7 && minute === 45 && second === 0) {
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


        } else if (hour === 12 && minute === 10 && second === 0) {
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

        } else if (hour === 17 && minute === 8 && second === 0) {
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
    } else if (day == 6) {
        if (hour === 7 && minute === 45 && second === 0) {
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


        } else if (hour === 12 && minute === 8 && second === 0) {
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

        }
    }


    const d = new Date().getDate();
    const m = new Date().getMonth() + 1;
    const y = new Date().getFullYear();

    dates.innerHTML = (d < 10) ? '0' + d : d;
    months.innerHTML = (m < 10) ? '0' + m : m;
    years.innerHTML = y;
}
setInterval(setTimess, 1000);
setInterval(ActiveFrontEnd, 1000);