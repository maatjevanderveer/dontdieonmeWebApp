/*------------Validation Function-----------------*/
var count = 0; // To count blank fields.
function validation(event) {
var radio_check = document.getElementsByName('gender'); // Fetching radio button by name.
var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.
var text_area = document.getElementsByTagName('textarea');
// Validating radio button.
if (radio_check[0].checked == false && radio_check[1].checked == false) {
var y = 0;
} else {
var y = 1;
}
// For loop to count blank inputs.
for (var i = input_field.length; i > count; i--) {
if (input_field[i - 1].value == '' || text_area.value == '') {
count = count + 1;
} else {
count = 0;
}
}
if (count != 0 || y == 0) {
alert("*All Fields are mandatory*"); // Notifying validation
event.preventDefault();
} else {
return true;
}
}
/*---------------------------------------------------------*/
// Function that executes on click of 1st next button.
function next_step1() {
document.getElementById("q1").style.display = "none";
document.getElementById("q2").style.display = "block";
document.getElementById("active2").style.color = "red";
}
// Function that executes on click of 1st previous button.
function prev_step1() {
document.getElementById("q1").style.display = "block";
document.getElementById("q2").style.display = "none";
document.getElementById("active1").style.color = "red";
document.getElementById("active2").style.color = "gray";
}
// Function that executes on click of 2nd next button.
function next_step2() {
document.getElementById("q2").style.display = "none";
document.getElementById("q3").style.display = "block";
document.getElementById("active3").style.color = "red";
}
// Function that executes on click of 2nd previous button.
function prev_step2() {
document.getElementById("q3").style.display = "none";
document.getElementById("q2").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}
// Function that executes on click of 3rd next button.
function next_step3() {
document.getElementById("q3").style.display = "none";
document.getElementById("q4").style.display = "block";
document.getElementById("active3").style.color = "red";
}
// Function that executes on click of 3rd previous button.
function prev_step3() {
document.getElementById("q4").style.display = "none";
document.getElementById("q3").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}
// Function that executes on click of 4th next button.
function next_step4() {
document.getElementById("q4").style.display = "none";
document.getElementById("q5").style.display = "block";
document.getElementById("active3").style.color = "red";
}
// Function that executes on click of 4th previous button.
function prev_step4() {
document.getElementById("q5").style.display = "none";
document.getElementById("q4").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}
// Function that executes on click of 5th next button.
function next_step5() {
document.getElementById("q5").style.display = "none";
document.getElementById("q6").style.display = "block";
document.getElementById("active3").style.color = "red";
}
// Function that executes on click of 5th previous button.
function prev_step5() {
document.getElementById("q6").style.display = "none";
document.getElementById("q5").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}
// Function that executes on click of 6th next button.
function next_step6() {
document.getElementById("q6").style.display = "none";
document.getElementById("q7").style.display = "block";
document.getElementById("active3").style.color = "red";
}
// Function that executes on click of 6th previous button.
function prev_step6() {
document.getElementById("q7").style.display = "none";
document.getElementById("q6").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}