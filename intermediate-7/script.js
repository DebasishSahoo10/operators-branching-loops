// problem statemnet : Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.


var input = document.querySelector('#day-input')
var button = document.querySelector('#check-button')




var databaseDay = {
    Monday : "Weekday",
    Tuesday : "Weekday",
    Wednesday : "Weekday",
    Thursday : "Weekday",
    Friday : "Weekday"
}

var day = Object.keys(databaseDay);

var inputDay = input.value;

function checkDay(){
    if(inputDay == day){
        console.log("Weekday")
    } else {
        console.log("Weekends")
    }

    console.log(day)
}




button.addEventListener("click", checkDay)