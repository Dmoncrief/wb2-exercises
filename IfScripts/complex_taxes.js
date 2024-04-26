"use strict"

var payRate = 10;
var hoursWorked = 45;
var grosspayWeekly;
var grosspayAnnual;
 var stat = "single";
var taxRatePercent;


grosspayWeekly = payRate* hoursWorked


// todo actually compute gross pay corretly

grosspayWeekly = 475;



grosspayAnnual = grosspayWeekly * 52;




if(stat == "single") 
    if(grosspayAnnual <12000) {
        taxRatePercent = 0.05; 
    } else if (grosspayAnnual < 2500) {
        taxRatePercent = 0.1;
    } else if (grosspayAnnual < 7500) {
        taxRatePercent = 0.15;
    }  
    else (grosspayAnnual = 75000) 
        taxRatePercent = 0.2;
    
        // Display results

        console.log("The gross annual pay is:" + grosspayAnnual);
        console.log("The tax percentage is:" + taxRatePercent);


        // -------------------------------------------------


        "use strict"

var payRate = 10;
var hoursWorked = 45;
var grosspayWeekly;
var grosspayAnnual;
 var stat = "single";
var taxRatePercent;


grosspayWeekly = payRate* hoursWorked


// todo actually compute gross pay corretly

grosspayWeekly = 475;



grosspayAnnual = grosspayWeekly * 52;




if(stat == "joint") 
    if(grosspayAnnual <12000) {
        taxRatePercent = 0; 
    } else if (grosspayAnnual < 2500) {
        taxRatePercent = 0.6;
    } else if (grosspayAnnual < 7500) {
        taxRatePercent = 0.11;
    }  
    else (grosspayAnnual = 75000) 
        taxRatePercent = 0.2;
    
         // Display results

         console.log("The gross annual pay is:" + grosspayAnnual);
         console.log("The tax percentage is:" + taxRatePercent);
 

