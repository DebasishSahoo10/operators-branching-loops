// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.


// code versione : 1
    // var checkButton = document.querySelector('#check-button')

    // var numberArray = [129,251];

    // function checkNumber() {
    //     if (numberArray[0] > numberArray[1]) {
    //         console.log("Maximum number is : " + numberArray[0])
    //         console.log("Minimum number is : " + numberArray[1])
    //     } else {
    //         console.log("Maxium number is : " + numberArray[1])
    //         console.log("Minimum number is : " + numberArray[0])
    //     }
    // }

    // checkButton.addEventListener("click", checkNumber)
// code versione : 1

// alternate version
    var checkButton = document.querySelector('#check-button')
    var numberOne = 129;
    var numberTwo = 251;

    function checkNumber() {
          var maxNum = Math.max(numberOne,numberTwo)
          var minNum = Math.min(numberOne,numberTwo)
          console.log("MIN : " + minNum)
          console.log("MAX : " + maxNum)
    }
    checkButton.addEventListener("click", checkNumber)
// alternate version