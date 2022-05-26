// problem statement = Write a program to take a number input from user and print multiplication table 12 times for that number.

var printButton = document.querySelector('#print-button')
var numberInput = document.querySelector('#input-number')



function printTable () {
    var number = numberInput.value;
    let n = 0;
    for (let i=0; i<10; i++) {
        console.log(`${number} * ${i} = ${number * i}`)
    }
}



printButton.addEventListener("click", printTable)