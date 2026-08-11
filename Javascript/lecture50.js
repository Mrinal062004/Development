///compile time error
//.syntax error 
// console.log(1)

///runtime error
//reference error
// console.log(x);
///error hamesha hr system me ate hai
// try{
//     console.log("try block start here")
//     console.log(x)

// }
// catch(e){
//     //define what to do with error
//     //retry logic
//     // fallback mechanism
//     //logging
//     // custom error
//     console.log("I am insidde Catch Block")
//     console.log("your error is ",e)
// }
// finally{
//     console.log("I will inside finally block at end")
// }
try{
    console.log(x);

}
catch (err){
    throw new Error("please declare first than through an error");
}