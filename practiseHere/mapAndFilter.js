//using Map 
const array = [1,2,3,4,5,6,7,8,9,10];

const newArray = array.map((i)=>{
    return i*2; 
});
console.log(newArray); 

//using Filter
//filter out single digit numbers
const filteredArray = newArray.filter((i)=>{
    if(i >=0 && i < 10){
        return true;
    }
    else return false;
})
console.log(filteredArray);   