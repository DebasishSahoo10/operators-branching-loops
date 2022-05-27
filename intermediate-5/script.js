// problem statement : Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120


var input = document.querySelector('#number-input')
var button = document.querySelector('#check-button')



let f = 1;
function printFactorial(){
    for (let i=1; i<=input.value; i++){
        f = f*i;
    }

    console.log(f)
}


button.addEventListener("click", printFactorial)
