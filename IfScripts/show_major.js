"use strict"

//  define the variables

var studentName = "Destiny";
var studentMajor;
var majorCode = "BIOL";
var departmentOffice;

// statements to fill out

if (majorCode == "BIOL") {
    studentMajor = "Biology";
    departmentOffice = "Science Bldg, Room 310"
} else if (majorCode == "CSCI") {
    studentMajor = " Computer Science";
    departmentOffice = " Sheppard Hall, Room 314";
} else if (majorCode == "ENG") {
   studentMajor = " English";
    departmentOffice = "Kerr Hall, Room 201";
} else if (majorCode == "HIST") {
    studentMajor = "History";
    departmentOffice = "Kerr Hall, Room 114";
} else if (majorCode == "MKT") {
    studentMajor = " Marketing";
    departmentOffice = " Westly Hall", "Room 310";
} else {
    studentMajor = "Unknown";
    departmentOffice = "Nothing";
}

// Display the results

console.log("student: " + studentName);
console.log("major: " + majorCode);
console.log("Advising location " + departmentOffice);
    