//Loops in javascript

//Program to add first n natural number.

// let sum = 0
 const prompt = require("prompt-sync")({sigint:true})
// let n = prompt("Enter the value of n: ")
// n = Number.parseInt(n)
// for(let i=0; i<n; i++){
//     sum += (i+1);
// }
// console.log(`Sum of first ${n} natural number is ${sum}`)
/*
let obj = {
    harry : 89,
    shubh : 34,
    shivika : 87,
    ritika : 67,
    shiv : 78
}
//For in loop
for(let a in obj){
    console.log("Marks of " +a+ " is " +obj[a])
}
*/

//For of loop
// for(let b of "Harry"){//here after of there should be a string or array. that is iterable
//     console.log(b)
// }



//Functions in javascript
/*
const hello = () => {
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
  }
  
  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  
  const sum = (p, q) => {
    return p + q
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  let v = hello();
  console.log(v)
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  console.log(sum(9, 7))
  */


  //Practice questions
  //Q1. Write a program to print the marks of a student in an object using for in loop
  console.log("Answer of Q1")
  let obj = { 
    harry : 98,
    rohan: 70,
    akash: 79
}
for(let a in obj){
    console.log("Marks of student " +a+ " is: " +obj[a])
}
console.log()

console.log("Answer of Q2")
//Q2. Write the program to print the marks us ing for loop
for(let i=0; i<Object.keys(obj).length; i++){
   console.log("The marks of student "+Object.keys(obj)[i]+ " is " + obj[Object.keys(obj)[i]])
   
}
console.log()

// //Q3. Write a program to print "try again" until the user enters the correct number
// console.log("Answer of Q3")
// let cn = 43
// let i
// while (i != cn) {
  
//   i = prompt("Enter a number")
//   console.log("Try again")
// }
// console.log("You have entered a correct number")
console.log()

//Write a function to find mean of 5 numbers
console.log("Answer of Q4")
const findMean = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5
}
console.log("Mean of the given number " +findMean(5,6,3,7,8))
