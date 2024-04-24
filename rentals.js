"use strict"

// Input
var vans = 15;
var vanCost = 250;
var people = 38;

// Calculations for total needed 
var totalCost = vans * vanCost;
var costPerPerson = totalCost / people;
var vansNeeded = Math.ceil(people / vans);

//  Output for van cost

console.log(" The vans needed is:" vansNeeded);
console.log(" The total cost is: " totalCost);
console.log(" The cost per person is: " costPerPerson);