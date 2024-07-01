 // A = 100 to 79
// B = 79 to 60
// c = 59 to 49
// D = 49 to 40
// E = 40 to 0

function grade_generate(){
let marks = prompt("Enter Student Marks");

 if (marks <= 100  && marks >= 79){
    alert('You Got A')
 } else if (marks < 79 && marks >=60){
    alert('You Got B')
 } else if ( marks <= 59 && marks >= 49){
    alert('You Got C')
 } else if ( marks < 49 && marks >= 40){
    alert ('You Got D')
 } else if ( marks < 40 && marks >= 0 ){
    alert('You Got E')
 } else {
    alert ('Out of Range')
 }
}

grade_generate();