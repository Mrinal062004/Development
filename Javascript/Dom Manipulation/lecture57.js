// // Async and await
// async function getData(){
//     setTimeout(function(){
//         console.loga("I am Inside the Timeout Block")
//     },3000);
// }
// let output=getData()


// /// Await Logic
// //But before to need to study Fetch API

//scenario
//prepare url/api endpoint -> sync
//await// fetch data -> network call -> async
//process data
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://dummyjson.com/posts/add"
const option={
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ title: "Mrinal tera baap hai" ,
    userId:5,
  }),
  
};
async function postData(){
const response=await fetch(url,option);
let data =await response.json();
console.log("My data",data);


}
async function getData(){
    let response=await fetch('https://dummyjson.com/posts/user/252');
    //parse json -async 
    let data=await response.json();
    console.log(data);
      
}
async function processData(){
await postData();
await getData();
}
processData();