
const timerContainer = document.querySelector('.timer');
const timerMinEl = document.querySelector('.timer-min');
const timerSecEl = document.querySelector('.timer-sec');

const startBtnEl = document.querySelector('.btn-start');
const stopBtnEl = document.querySelector('.btn-stop');
const resetBtnEl = document.querySelector('.btn-reset');

const timer = 15;
let interval;
let currentTime = timer;
let timerWorking = false;


function updateTimer(){
    timerContainer.style.color = currentTime < 10 ? 'darkred' :'black';
    timerMinEl.innerText = Math.floor(currentTime/60).toString().padStart(2, "0");
    timerSecEl.innerText = (currentTime%60).toString().padStart(2,"0");
}

function timerStart(){
    console.log('start');

    interval = setInterval(() => {
        currentTime--;
        updateTimer();
        if(currentTime !== 0 && currentTime < 10){
            setBlinkTimer();
        }
        else if(currentTime === 0){
            clearInterval(interval);
            currentTime = timer;
            updateTimer();
            setBlinkTimer();
            alert("Time is up!!");
        }
      
        
    }, 1000);
}

function setBlinkTimer(){
    if(timerContainer.classList.contains('blink-timer')){
        timerContainer.classList.remove('blink-timer');
    }
    else{
        timerContainer.classList.add('blink-timer');
    }
}

function timerStop(){
    console.log('stop');
    clearInterval(interval);
}

function timerReset(){
    console.log('reset');
    clearInterval();
    currentTime = timer;
    updateTimer();

}


startBtnEl.addEventListener("click", timerStart)
stopBtnEl.addEventListener('click', timerStop);
resetBtnEl.addEventListener('click', timerReset);