/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(!isNaN(n) &&  n<0){
                reject("Please enter valid input ");
            }
            resolve();
            }, n * 1000);
            });
            
}

module.exports = wait;
