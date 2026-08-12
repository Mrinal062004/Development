// let firstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("My Name is Trigerred Insaan ");
//     },10000);
//     resolve(1);
    
// });
// let promise1 =new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("Promise Fullfiled");
//     }
//     else{
//         reject("Promise Rejected")

//     }

// });
// promise1.then((message)=>{
//     console.log("Then print message is " +message)
// }).catch((error)=>{
//     console.log("Error:"+error);
// })
let promise1 =new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"First");
})
let promise3 =new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"First");
})
let promise4 =new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"First");
})
Promise.all([promise1,promise2,promise3 ,promise4])
.then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.error("error:" +error);

})