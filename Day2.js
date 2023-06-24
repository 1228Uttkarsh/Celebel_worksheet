//Expressions and conditionals
//Operators in javascript

//1. Aritmetic operator
// let a = 10, b = 5
// console.log('Addition',a+b)
// console.log('Sbtraction',a-b)
// console.log('Multiplication',a*b)
// console.log('Division',a/b)
// console.log('Exponential',a**b)
// console.log('Modulus',a%b)
// console.log('Pre Increment:',++a)//11
// console.log('Post Incriment',a++)//11
// console.log('Post Incriment',a++)//12
// console.log('Pre Decrement',--b)//4
// console.log('Pre Decrement',b--)//4
// console.log('Pre Decrement',b--)//3

//2. Assignment Operator
// x=y
// let x = 4, y =2
// console.log(x+= y)
// console.log(x-= y)
// console.log(x*= y)
// console.log(x/= y)
// console.log(x%= y)
// console.log(x**= y)

//3. Comparision operator
/* 
== equal to
!= not equal to
=== Strict equal to (equal value and equal type)
!== not equal value or not equal type.
>, <, >=, <=
? Ternary operator 
*/

//4. Logical opertor
// && logical and
// || logical or
// ! logical not


//Conditional  Statement 
// if statement
function statement(){
    let age = 21
    if(age>18){
        console.log("You can drive")
    }
    else if(age<=18){
        console.log("You can't drive")
    }
    else{
        console.log("You are a kid!")
    }
    
}
statement()


//Javascript Ternary operator
let marks = 12
console.log((marks>10)? "yes": "no")

//Practice questions

//Q1: Use logical operators to find whether the age of a person lies between 10 and 20?

let age = 16
if(age>10  && age <20){
    console.log("Your age is in between 10 and 20")
}

//Q2. Demonstrate the us of switch case statements in javascript.
let grade = "B"
switch(grade){
    case 'A':
        console.log("Pass with excellent marks")
        break;
    case 'B':
        console.log("Pass with good marks")
        break;
    default:
        console.log("Try hard! Next time")
}

//Q3. Write  a javascript program to find whether a number is Divisible by either 2 or 3
let num = 8
if(num % 2 ==0 || num % 3==0){
    console.log("The given number is divisible by either 2 or 3")
}
else{
    console.log("Numbe is neither divisible by 2 nor 3")
}


//Q4. Write a javascript program to find whether a number is Divisible by 2 and 3
if(num % 2 ==0 && num % 3==0){
    console.log("The given number is divisible by either 2 and 3")
}
else{
    console.log("Number is neither divisible by 2 nor 3")
}

//Q5. Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator.
let age1 = 19
console.log((age1>18)?"You can Drive" : "You cannnot Drive")
