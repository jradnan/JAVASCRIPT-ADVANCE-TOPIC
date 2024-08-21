const calculate = function calc (num,num2, machine = square){
    return machine(num,num2)
}




function sum (num1,num2){
    return num1 + num2
}

function multiply(num1,num2){
    return num1 * num2
}

function square(num1,num2){
    return num1 ** num2
}
console.log(calculate(4,4));