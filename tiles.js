"use strict"

//  Declare the value

var roomLength = 13;
var roomWidth = 10;
var tilesPerBox= 12;

// Establsih what needs to be calculated
var howManyBoxesToBuy; 
var roomSquareFeet;



//  Do the calculations

roomSquareFeet = roomLength * roomWidth;
howManyBoxesToBuy = roomSquareFeet / tilesPerBox;


howManyBoxesToBuy = Math.ceil(howManyBoxestoBuy);

// Display the results.

console.log("How many boxes to buy is: " + howManyBoxesToBuy);
