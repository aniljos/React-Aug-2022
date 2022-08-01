
//default import
import calc from './one.js'


//named import 
//import {sum, multiply} from './one.js';
import * as twofns from './one.js';

console.log("in two.js");



function process(){

    console.log("in process of two.js");
    calc(3,4);
    //sum();
    twofns.sum();
    twofns.multiply();
}


export default process;