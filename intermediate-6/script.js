// problem statement : Write a Program to take a number input from user and find if the number is Prime or not.


var input = document.querySelector('#number-input')
var button = document.querySelector('#check-button')




function checkPrime() {
    for (let i=2; i<input.value; i++){
        if (input.value % i == 0){
            console.log("not prime")
            break;
        } else {
            console.log("prime")
            break;
        }
    }
}



button.addEventListener("click", checkPrime)
