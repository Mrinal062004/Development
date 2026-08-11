let mydiv=document.querySelector("#mydiv");
let newElement=document.createElement('span');
newElement.textContent="My Element is now begin to inserted";
mydiv.insertAdjacentElement("beforebegin",newElement);
