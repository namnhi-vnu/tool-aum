// select cart html
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');


// read file and write file
function ghiNgayChamCong() {
    const dateCham = new Date();
    const fs = require('fs');
    const data = 'my name Alex';
    fs.writeFile('./content/data.txt', data, (err) => {
        if (err) throw err;
    });
}
// function Post Data
function setTimess() {

    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    // export data
    hours.innerHTML = (hour < 10) ? '0' + hour : hour;
    minutes.innerHTML = (minute < 10) ? '0' + minute : minute;
    seconds.innerHTML = (second < 10) ? '0' + second : second;
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
        const modifi = document.querySelector('.app_desc');

    } else if (hour === 8 && minute === 48 && second === 0) {
        /**
         * New Data auto
         */
        var formData = new FormData();
        formData.append('entry.196786207', 'Hoàng Anh Minh');
        formData.append('entry.718595202', 'Tester');
        formData.append('entry.1580319989', 'Sáng');
        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbx7aa2dCwLKuo4Ksy5EppGKEx5cOvvD1aXuzJBSj3MjSVxg/formResponse");
        request.send(formData);

    } else if (hour === 8 && minute === 56 && second === 0) {
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
        ghiNgayChamCong();
    }

}
setInterval(setTimess, 1000);
ghiNgayChamCong();