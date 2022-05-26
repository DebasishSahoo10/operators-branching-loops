// problem statement : Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.


var inputOne = document.querySelector('#input-one')
var inputTwo = document.querySelector('#input-two')
var inputThree = document.querySelector('#input-three')
var checkButton = document.querySelector('#check-button')


function maxMinChecker() {
    var maxNumber = Math.max(inputOne.value, inputTwo.value, inputThree.value)
    var minNumber = Math.min(inputOne.value, inputTwo.value, inputThree.value)
    console.log("Max Number : " + maxNumber)
    console.log("Min Number : " + minNumber)
}


checkButton.addEventListener("click", maxMinChecker)