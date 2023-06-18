//Variables in javascript
/*It is a container that stores a value. we can define variables by three keywords like var, let const.
let and const are blocked scope while var is globally scoped. var can be re declared but let and const can't.
let will be redeclaredf within block if it already re declared globally.*/

// var name = 'Uttkarsh'
// let name1 = 'kumar'
// const name2 = 'Rohan'
// var name = 'Stark'//here it is redeclared.




//Here below in both case we cannot redeclared , it throw an error.
// let name1 = 'Poll'
// const name2 = 'lakhan'
//but we can redeclared in block like in the function

// function fun()
// {
// let name1 = 'poll'
// const name2 = 'lakhan'
// console.log(name1, name2)
// }
// fun()
// console.log(name,name1,name2)//name variable is updated.



//Primitive datatypes 
/* There are 7 primitive datatypes in javascript 
1.Null  2.Numbers  3.String  4.Symbol 5.Boolean 6.BigInt  7.Undefined.
*/
//Object in javascript.
/*
const item = {
    name: "led Bulb",
    price : "150"
}*/
//Quick quiz: Write a javascript program to store name, phone number and marks of a student using object.
const stu_details ={
    name: "Uttkarsh",
    phoneNumber: 9810234677,
    marks: 93
}
// print the key value pair of object
//Method 1
for(let key in stu_details){
    if (stu_details.hasOwnProperty(key)){
        console.log(key + ": " +stu_details[key])
    }
}

//Method2  Object.entries() to get an array of key-value pairs, and then forEach() to iterate over them.
Object.entries(stu_details).forEach(([key,value]) => {
    console.log(key + ": " +value)
})