"use strict"

// Current hour (0-23)

let currentHour = 10;


// result of variable
 let greeting; 



//  use if statement to set greeting based on current hour

if (currentHour < 10) {
    greeting = "Good morning!";

} else if (currentHour < 17 ){
    greeting = "Good day!"

}
    else if( currentHour <=23){
        greeting = "Good evening!"
    }




    //  Display result 
    console.log(greeting);



