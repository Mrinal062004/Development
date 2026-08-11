//object cloning
let src={
    age:12,
    wt:68,
    ht:180
};
// let dest={...src}
// // let dest=src

// // console.log(obj);
// // obj.color="White";
// // console.log(obj)
// let dest =Object.assign({},src);


let src2={
    value:102,
    name:"Love Babbar"
};
let dest={};
for (let key in src2){
    let newKey=key;
    let newValue=src2[key];
    //insert newkey and newvalue in dest to create a sclone
    dest[newKey]=newValue;
}
// let dest =Object.assign({},src, src2);
console.log("src :", src2);
console.log("dest :",dest);

