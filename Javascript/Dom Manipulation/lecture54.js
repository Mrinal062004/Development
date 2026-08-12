// //code 1
// const t1=performance.now()
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="This is para " +i;
//     document.body.appendChild(para);

// }
// const t2=performance.now();
// console.log("Total Time By Code 1:   "+[t2-t1]);


// //code 2
// const t3=performance.now();

// let mydiv=document.createElement('div');
// console.log("hello")
// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent="This is para " +i;
//     mydiv.appendChild(para);
    
// }
// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log("Total Time By Code 2:"+[t4-t3]);


//Best Code
const t1=performance.now();
let fragment=document.createDocumentFragment();
for (let i=1; i<=100; i++ ){
    let para=document.createElement("p");
    para.textContent="This is para " +i ;
    //no reflow and no repaint hence it is good practice
    fragment.appendChild(para);

}
// here it take one reflow and one repaint
document.body.appendChild(fragment);
const t2=performance.now();
console.log("Total Time By Code 1:   "+[t2-t1]);

