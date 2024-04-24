"use strict"

// Declare known values

var federalTaxRate = 0.23;
var monthlySalary = 6000;

//  Establish what is witheld
var amountWithheld = monthlySalary * federalTaxRate;


//  Do the calculation 

console.log("The amount withheld is: " + amountWithheld);