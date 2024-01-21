/*Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

var counter = 0;

function start(){
    setInterval(()=>{
        console.log(counter); //prints the current value of counter every 1 second
        counter++;            //increases the value of counter with each print
        }, 1000)             //sets interval to 1 second</s>
    }
    start();                     //starts the function
