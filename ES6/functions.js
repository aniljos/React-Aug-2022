//function statement
//implicit args: this, arguments
function sum(x, y){
    console.log("in sum", arguments);
}
sum(2,3);

//function expression: store the function in a variable or a collection, 
// pass it as an argument to another fn or return a function from a fn
var add = function(x, y){
    console.log("in add");
}

add(3,4);

//arrow function
var calc = (x, y)=>{
    console.log("in calc");
}
calc(5,6);

calc = (x, y)=> x * y;
console.log("calc", calc(8, 9));


var obj  = {
    id: 10,
    print: function(){
       

        console.log("obj Id", this.id);
        setTimeout(()=>{
            
            console.log("obj Id after 2secs", this.id);
        }, 2000);
    }
}
obj.print();

