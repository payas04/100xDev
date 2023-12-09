// Create a counter that counts down from 30 to 0 
var timeLeft = 30;
var timer = setInterval(countdown, 1000)

function countdown(){
    if(timeLeft == -1){
        clearInterval(timer);
    }
    else{
        console.log(timeLeft);
        timeLeft--;
    }
}