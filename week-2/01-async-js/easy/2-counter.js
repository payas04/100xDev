/* Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

var counter = 0;

function start(){
        console.log(counter); //prints the current value of counter every 1 second
        counter++;            //increases the value of counter with each print
          }          //sets interval to 1 second</s>
while(1){
    setTimeout(start,1000)   //calls function 'start' after a
    //setTimeout delay of 1 second (1000 milliseconds).
    }                           //This loop will keep running forever because
    //the while condition is always true (1=1).</s>




































































