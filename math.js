const num = 12.55555453;
const num2 = 12.45;
const num3 = -12.45;

console.log(Math.trunc(num));
console.log(Math.ceil(num)); // round to upper number
console.log(Math.floor(num2)); // round to lower number
console.log(Math.round(num2)); // round to lower number if .50 down
console.log(Math.abs(num3)); // make it positive number
console.log(Math.pow(4, 2)); // make it double  multiply
console.log(Math.random()); // give number 0 to upto 1 i mean less then 1
console.log(Math.max(1, 2, 4, 343, 555)); // give the max number
console.log(Math.min(1, 2, 4, 343, 555)); // give the min number

const result = Math.ceil(Math.random() * 5);

console.log(result);





// 1.Exercise-1
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  if (a.toLocaleString() === b.toLocaleString()) {
    return true;
  } else {
    return false;
  }
}
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00")); //false
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00")); //true
myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00")); //false



// 2.Exercise-2
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
    
    const differentTime = Math.abs(a - b); 
    const differentDays = differentTime / (1000 * 3600 * 24); 
    return differentDays;
  }
  
  myFunction(new Date('2020-06-11'), new Date('2020-06-01')) //10
  myFunction(new Date('2000-01-01'), new Date('2020-06-01')) //7457

  



// 3.Exercise-3
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

function myFunction(a, b) {
  if (a.toLocaleString() < b.toLocaleString()) {
    return true;
  } else {
    return false;
  }
}

myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00")); //true
myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:00:00")); //false
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00")); //false

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
console.log(
  myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);







// 5.Exercise-5 

//Generate a Random Number between two values
//Number must be a full Number (not fraction)
//endNum must be exclusive


function generateRandomNum(startNum, endNum){
    const result = Math.floor(Math.random( (startNum - endNum)))
    return result

}

generateRandomNum(5, 10)

console.log(generateRandomNum(5, 10));