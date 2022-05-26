// problem statement : Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

var checkButton = document.querySelector('#check-button')


let num1 = 35;
let num2 = 29;
let num3 = 46;

function checkFunction() {
    var maxNumber = Math.max(num1,num2,num3)
    var minNumber = Math.min(num1,num2,num3)
    console.log("Maximum Number : " + maxNumber)
    console.log("Minimum Number : " + minNumber)
}



checkButton.addEventListener("click", checkFunction)