

// function changeText(event){
//     console.log(event);
//     let fpara=document.getElementById("fpara");
//     fpara.textContent=" Hello Kaatil";
    
// }
// let fpara=document.getElementById("fpara");
// fpara.addEventListener('click',changeText);
// // fpara.removeEventListener('click',changeText);
// let anchorElement=document.getElementById("anchor");
// anchorElement.addEventListener('click',function(){
//     event.preventDefault();
//     anchorElement.textContent="Click Done chaudhary"

// });
let paras=document.querySelectorAll('p');
function alertPara(){
    if(event.target.nodeName=='SPAN'){
        alert("You have click on Span : " +event.target.textContent);
 }}
// for(let i=0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara);


// }
let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertPara)
