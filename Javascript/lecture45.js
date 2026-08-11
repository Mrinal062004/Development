// // Call stack and hosting
// // function Hosting
// // sayMyName("Mrinal Tiwari")
// // function sayMyName(finalName){
// //     console.log(finalName);

// // }

// // Variable Hosting
// var age=25;
// console.log(age)

// console.log(age);
// const age=24;

// let sayHello =function(){
//     console.log("Hello jee")
// }
// sayHello();
// when function expression is used we cant call function before the function define
// Class is a blueprintand its instance is object
// class Human{

// }
// const object1=new Human();
//function call stack(LIFO)
//why function is called first class citizen
// function greetMe(greet, Name){
//     console.log("Hello",Name);
//     greet();

// }
// function greet(){
//     console.log("greeting for the day")
// }
// greetMe(greet,"Mrinal")
// function solve(number){
// return function(number){
//     return number*number;
// }
// }
// let ans=solve(5)
// let finalans=ans(10);
// console.log(finalans);
// const arr=[
//     function(a,b){
//         return a+b;

//     },
//     function(a,b){
//         return a-b;

//     },
//     function(a,b){
//         return a*b;

//     },
// ];
// let ans=arr[2]
// let first =ans(5,10)
// console.log(first)
let obj ={
    age:25,
    wt:36,
    ht:167,
    greet:()=>{
        console.log("Kutte ko tang diya")
    }
}
console.log(obj.age);
obj.greet()