let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

setInterval(() => {
    let d = new Date();  // Declaring variables
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30 * htime + mtime / 2;  // 360/12 = 30, hence multiply hours by 30
    let mrotation = 6 * mtime;               // 360/60 = 6, hence multiply minutes by 6
    let srotation = 6 * stime;               // 360/60 = 6, hence multiply seconds by 6

    // Applying the rotation to the hour, minute, and second hands
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

