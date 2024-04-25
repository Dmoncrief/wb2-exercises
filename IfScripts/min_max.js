"use strict"

var a = 20;
var b = 40;
var c = 8;

//  lets find the min

var smallest;
if (a <= b && a <= c ) {
    smallest = a;
} else if (b <= a && b <= c) {
    smallest = b;
} else {
    smallest = c;
}


// lets find the max


var largest; 
if ( a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

// Display results

console.log("The smallest number is:" + smallest);
console.log("The largest number is:" + largest);