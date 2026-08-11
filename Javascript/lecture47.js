class Human{
    //properties
    age=13;
    #wt=80;
    ht=180;
    constructor(newAge , newHeight,newWeight){
        this.age=newAge;
        this.ht=newHeight
        this.#wt=newWeight
    }
    walking(){
        console.log("I am Running")
    };
    running(){
        console.log("I am walking")
    };
    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){
        this.#wt=val;
    }
};
let obj=new Human(50,178,56);
// let ans=obj.modifyWeight(50);
console.log(obj.fetchWeight);
// obj.walking;
console.log(obj.ht);