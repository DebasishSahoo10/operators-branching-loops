// problem statement : Write a program to take a number input from user and determine whether the number is odd or even.


var inputOne = document.querySelector('#input-one')
var checkButton = document.querySelector('#check-button')


function checkOddEven() {
    if (inputOne.value % 2 == 0) {
        console.log("EVEN")
    } else {
        console.log("ODD")
    }
}


checkButton.addEventListener("click", checkOddEven)