//map: Creates a new array by applying a function
//     to each element of the original array.
//filter: Creates a new array with elements that 
//        pass a certain condition based on a provided function.



var originalArray = [1,2,3,4,5,6,7,8,9,10];

const newArray = originalArray.map(function (number){
    return number * 2;
});
console.log('New Array using map',newArray);


const filteredArray = originalArray.filter(function (number){
    return  number % 2 != 0;
});
console.log('Filtered Array using filter',filteredArray);