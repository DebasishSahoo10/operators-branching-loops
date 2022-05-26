// problem statement : Write program to take a month as an input from the user and find out whether the month has 31 days or not.

var input = document.querySelector('#month-input')
var checkButton = document.querySelector('#check-button')




function checkNumberOfDays() {
    if (input.value==1 || input.value==3 || input.value==5 || input.value==7 || input.value==8 || input.value==10 || input.value==12) {
        console.log("Has 31 Days")
    } else {
        console.log("Has 30 or 28/29 Days")
    }
}




checkButton.addEventListener("click" , checkNumberOfDays)