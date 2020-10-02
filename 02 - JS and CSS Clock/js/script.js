const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds + "SECONDS");

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours + "HOURS");

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes + "MINUTES");
}

setInterval(setDate, 1000);