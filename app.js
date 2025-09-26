// console.log("Hello I aM a js")

// let age=45

// if(age>18){
//     document.write("you can drive")


// }
// else{
//     document.write("You Cannot Drive")
// }

 var per = prompt("Enter your percenatage: ");

if (per >= 80 && per <= 100) {
  document.write("Grade: A+")
} else if (per >=70 && per < 80) {
  document.write("Grade: A")
} else if (per >=60 && per < 70) {
  document.write("Grade: B")
} else if (per >=50 && per < 60) {
  document.write("Grade: C")
} else if (per >=40 && per < 50) {
  document.write("Grade: D")
} else if (per >=30 && per < 40) {
  document.write("Grade: E")
} else if (per > 0 && per < 30) {
  document.write("Fail")
} else {
  document.write("Invalid percentage")
}