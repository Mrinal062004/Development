//closure when data
function outerfunction() {
    let name="Mrinal";
    // name is a local variable created by init
    
    function innerfunction(){
        // let name="Mikku"
        //displayNmae() is the inner function that forms a closure 
        console.log(name);
        // use variable declared in the parent function

    

    }
    return innerfunction;

}
let inner=outerfunction();
inner();
//how this closure work in this case 