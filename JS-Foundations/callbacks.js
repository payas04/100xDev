//simple callback


function add(a , b){
    return a + b;
}
function sub(a , b){
    return a - b;
}
function calculate (x , y ,  callback){
    return callback(x,y);
}

console.log(calculate(2,33,add));
console.log(calculate(10,5,sub));


