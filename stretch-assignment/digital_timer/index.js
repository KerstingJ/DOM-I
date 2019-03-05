const secTen = document.querySelector("#secondTens");
const secOne = document.querySelector("#secondOnes");
const msHundred = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

let time = 0;
let timer;

function updateTimer(){
    time += 1;
    msHundred.textContent = Math.floor(time / 1) % 10;
    msTens.textContent = Math.floor(time / 10) % 10;
    secOne.textContent = Math.floor(time / 100) % 10;
    secTen.textContent = Math.floor(time / 1000) % 10;
    if (time > 999){
        clearInterval(timer);
    }
}

timer = setInterval(updateTimer, 10);