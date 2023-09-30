'use strict';
// Accessing the hr min and sec boxes

const hour = document.querySelector('.hr');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');
const am_Pm = document.querySelector('.am-pm');
function formatAMPM() {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'
    min = min < 10 ? '0' + min : min;
    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.textContent = sec;
    am_Pm.innerHTML = ampm;
}

setInterval(formatAMPM, 1000);
