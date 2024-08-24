const calculate = function calc(num, num2, machine = square) {
  return machine(num, num2);
};

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num1, num2) {
  return num1 ** num2;
}
console.log(calculate(4, 4));

// 1.Define a function that outputs max of two values, Don't use Built in Method

function max(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
}

console.log(max(20, 25));

// Exercise-2(3)
// ========================================
// Must result a array including all elements in the defined range

function arrayFromRange(num1, num2) {
  const result = [];
  for (let i = num1; i <= num2; i++) {
    result.push(i);
  }
  return result;
}

const rangeOne = arrayFromRange(1, 10);
console.log(rangeOne); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rangeTwo = arrayFromRange(10, 5);
console.log(rangeTwo); //[ 5, 6, 7, 8, 9, 10]

// Exercise-3 (3)
// ========================================
// Sum up all the numbers in between passed arguments
function showNumber(num1, num2) {
  const result = [];
  for (let i = num1; i <= num2; i++) {
    result.push(i);
  }
  return result;
}
showNumber(2, 4); //9 (2 + 3 + 4)
showNumber(5, 2); //14 (2 + 3 + 4 + 5)
console.log(showNumber(1,6));

// Exercise-4 (3)
// ==================================
// Get the maximum number from the array

const numbers = [1, 2, 3, 4];

function getMax(array) {
  let maxNum;
  for (let num of array) {
    maxNum = Math.max(num);
  }
  return maxNum;
}

const max2 = getMax(numbers);

console.log(max2);

console.log(Math.max(2, 4));

// Exercise-5 (3)
// ========================================
// Write a function calculateAverage and receives arr as arguments, you have to calculate the average and return the grade
// Ex:
// <60-F
// 60-69-D
// 70-79-c
// 80-89-B
// >90-A

function calculateAverage(arr) {
  let sum = arr.reduce(function (total, element) {
    return total + element;
  }, 0);
  let count = arr.length;
  const average = sum / count;
  const result = Math.round(average);
  console.log(result);
  if (result > 90) {
    return "A";
  } else if (result >= 80 && result < 89) {
    return "B";
  } else if (result >= 70 && result < 79) {
    return "C";
  } else if (result >= 60 && result < 70) {
    return "D";
  } else {
    return "F";
  }
}

// calculateAverage([60, 70, 90, 50, 55]); // D
// calculateAverage([83, 70, 90, 50, 55])	// C
// console.log(calculateAverage([60, 70, 90, 50, 55]));
// console.log(calculateAverage([83, 70, 90, 50, 55]));
// console.log(calculateAverage([65, 70, 72]));
// console.log(calculateAverage([70, 80, 90]));

// Exercise-6 (2)
// ========================================
// Suppose you are given a funciton whiche receive a object , you have to find the key with value type of string and concat, return the information in speicifed format
// Ex: key-value

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};
const movie2 = {
  title: "avengers END game",
  releaseYear: 2018,
  rating: 4.5,
  director: "russo brothers",
};
function showProperties(movieData) {
  //TODO
  const data = `title-${movieData.title}  director-${movieData.director}`;
  // const director = movieData.director;
  return data;
}
showProperties(movie); //title-a director-b
console.log(showProperties(movie2));

// Exercise-7 (3)
// ========================================
// count the truthy value and return

const array = [0, null, undefined, "", 1, 3];

function countTruthy(arr) {
  console.log(arr);
  for (let arrData of arr) {
    if (arrData) {
      return arrData;
    }
  }
}

console.log(countTruthy(array)); //2

// Exercise-8 (Bonus Exercise) -Number won't be counted
// // ==========================================================
// count the occurrence of numbers
// result will be number of occurrence

function countOccurrences(array, searchElement) {
  let count = 0;
  for (let arr of array) {
    if (arr === searchElement) {
      count++;
    }
  }
  return count;
}

const number = [1, 2, 3, 1, 1, 4, 4, 4, 4];

const count = countOccurrences(number, 4);

console.log(count); //2
/*ব্যাখ্যা:
countOccurrences ফাংশনটি একটি অ্যারে এবং একটি নির্দিষ্ট অনুসন্ধান উপাদান (search element) গ্রহণ করে।
count ভেরিয়েবলটি ০ দিয়ে শুরু করা হয়েছে।
for...of লুপটি ব্যবহার করে অ্যারের প্রতিটি উপাদান (element) পরীক্ষা করা হয়েছে।
যদি কোনো উপাদান searchElement এর সমান হয়, তাহলে count ১ করে বৃদ্ধি করা হয়েছে।
সবশেষে count রিটার্ন করা হয়েছে, যা সেই নির্দিষ্ট সংখ্যাটি অ্যারেতে কতবার এসেছে তা দেখায়।*/



const myProfile = {
  firstName : "Md",
  lastName : "Yasin",
  education : {
    ssc : 2017,
    hsc : 2019,
    BAHoners:"2021-2025",
  }
}




const {firstName,lastName,...allData} = myProfile;

console.log(allData);


const data = ["shamin","adnan","yasin","arman"]

const [student1,student2, ...allStudent] = data

console.log(student1,student2,allStudent);


const products = [
  {name:"ada", price:12, color:'mejenta'},
  {name:"piaj", price:80, color:'red'},
  {name:"roshun", price:180, color:'white'},
  {name:"alu", price:150, color:'mix'},
]


const productPrice = products.map(product => product.price);
const productName = products.map(product => product.name);
for(let product of productName){
  console.log(product);
}
console.log(productPrice);
console.log(productName);




