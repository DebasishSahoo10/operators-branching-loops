// problem statement: Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

var button = document.querySelector('#print-button')

let star = ""
function printStarPattern() {
    for (let i=0; i<5; i++){
        star+="*"
        console.log(star)
    }
}


button.addEventListener("click", printStarPattern)