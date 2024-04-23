"use strict"
//define our known values.
var savingsAccountWorth = 1000;
var numberOfYears;

numberOfYears = 10;


//calculate the unknown values.
var netWorth;
netWorth = savingsAccountWorth * 2;


// used this article: https://www.investopedia.com/terms/r/ruleof72.asp
var interestRate;
interestRate = 72 / numberOfYears;

var message = "At a " + interestRate + " interest rate, your savings account"
+ " will be worth" + netWorth.toFixed(2) + "in" + numberOfYears.toFixed(1) + "years"

console.log(message);