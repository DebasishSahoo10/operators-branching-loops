// problem statement : Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....



var button = document.querySelector('#check-button')


let a = 0;
let b = 1;
let c;

function printFibonacciSeries() {
    for (let i=0; i<10; i++){
        console.log(a)
        c = a+b;
        a = b;
        b = c;
    }
}



button.addEventListener("click", printFibonacciSeries)