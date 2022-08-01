console.log("in one.js");


function calc(x, y){
    console.log("in calc of one.js");
}
//named export
export function sum(x, y){
    console.log("in sum of one.js");
}

//named export
export function multiply(x, y){
    console.log("in multiply of one.js");
}


//default export
export default calc;