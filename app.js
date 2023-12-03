// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }

//     else
//     if (i==5) {
//        // console.log(i+ " this is the half");
//        //break;
//        continue;
//        let c = 10;
//     }
//     else
//         console.log(i + " is an odd number");


// }
////////////////////////////////////////////////////////////////

// function multiply(firstNum,secondNum) {
//     console.log(firstNum*secondNum);
// }

// // var numOne = 3
// // var numTwo = 3
// multiply(4, 5)
///////////////////////////////////////////////////////////////

// let myName = prompt("enter your name")
// console.log(myName);


// function multiply(fiestNum, secondNum) {

//     for (let i = fiestNum; i < secondNum; i++) {
//         if (i % 2 == 1) {
//             console.log(i + " is an odd number");

//         }
//     }
// }
// multiply(1, 20)

////////////////////////////////////////////////////////////////////////////

let myStudents = ["ahmad", "ali", "yamen", "mira"]

let myStudentsMarks = [55, 45, 22, 77]


function markCalculate(params) {
   
       
    for (let j = 0; j < myStudentsMarks.length; j++) {

        if (myStudentsMarks[j] >= 50) {
            console.log("Congratulations "+ myStudents[j]+" you got a score of "+myStudentsMarks[j] +" and you passed")
    
       
        } else {
            console.log("Unfortunately "+ myStudents[j]+" you got a score of "+myStudentsMarks[j] +" and you failed")
        }
        
    
    }
}
    markCalculate()
    