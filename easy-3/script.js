// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

var checkButton = document.querySelector('#check-button')

var numberArray = [129,251];

function checkNumber() {
    if (numberArray[0] > numberArray[1]) {
        console.log("Maximum number is : " + numberArray[0])
        console.log("Minimum number is : " + numberArray[1])
    } else {
        console.log("Maxium number is : " + numberArray[1])
        console.log("Minimum number is : " + numberArray[0])
    }
}

checkButton.addEventListener("click", checkNumber)