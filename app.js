var english = +prompt("Enter english marks");
if(english < 0 || english > 100){
    alert("English marks should be positive number and less than 100");
    english = 0;
}
var urdu = +prompt("Enter urdu marks");
if(urdu < 0 || urdu > 100) {
    alert("Urdu marks should be positive number and less than 100");
    urdu = 0;
}
var islamiat = +prompt("Enter islamiat marks");
if(islamiat < 0 || islamiat > 100) {
    alert("Islamiat marks should be positive number and less than 100");
    islamiat = 0;
}

document.write("English marks: ",english);
document.write("<br>Urdu marks: ",urdu);
document.write("<br>Islamiat marks: ",islamiat);
totalMarks = 300;
obtainedMarks = english + urdu + islamiat;
document.write("<br>Total Marks: ",totalMarks);
document.write("<br>Obtained Marks: ",obtainedMarks);
document.write("<br>Percentage: ", (obtainedMarks/totalMarks) * 100 + "%");