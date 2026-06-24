const timer = document.getElementById("timer");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const start = document.getElementById("start")
let timeLeft = 25 * 60;

function updateTimer(){
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes}:${seconds.toString().padStart(2,"0")}`;
    
    if(timeLeft <0){
        clearInterval(interval);
        timer.textContent = "Time's up !"
    }
}
let interval;
start.addEventListener("click", ()=>{
    start.disabled = true;
    updateTimer();
    interval = setInterval(updateTimer, 1000);
    
    
})
stop.addEventListener("click",()=>{
        clearInterval(interval);
        start.disabled = false;
})
reset.addEventListener("click",()=>{
        clearInterval(interval);
        timer.textContent = "25:00";
        timeLeft = 25 * 60;
        start.disabled = false;
 })



