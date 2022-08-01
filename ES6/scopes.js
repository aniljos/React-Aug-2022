//Hoisting var x, y
// function foo(){
//     console.log("in foo");
// }

console.log("x:", x); // undefined
var x = 10;  // global
console.log("x:", x); // 10

var y;
console.log("y: ", y); // undefined

//console.log("z: ", z); //reference error


function foo(){
    // hoisting var msg ;

    console.log("in foo");

    if(x < 50){

        let msg = "Hello";
        console.log("msg", msg); // Hello
    }
   
}

foo();
