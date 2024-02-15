let Calculate = document.querySelector(".Calculate")
let c_language = document.getElementById("c_language")
let Cplus = document.getElementById("Cplus")
let Java = document.getElementById("Java")
let python = document.getElementById("python")
let Dbms = document.getElementById("Dbms")
let perchantage = document.getElementById("perchantage")
let grade = document.getElementById("grade")
let marks = document.getElementById("marks")
let classs = document.getElementById("classs")
let form_reset = document.getElementById("form_reset")

Calculate.addEventListener("click", () => {
               Result_function();
})

function Result_function() {
               let sum = parseInt(c_language.value) + parseInt(Cplus.value) + parseInt(Java.value) + parseInt(Java.value) + parseInt(Dbms.value);
               var per = sum / 500 * 100;
               marks.innerHTML=""
               marks.innerHTML += sum;
               perchantage.innerHTML=""
               if (per <= 33) {
                              perchantage.innerHTML = ""
               } else {
                              perchantage.innerHTML += per;

               }
               fetch_grade(per)
}


function fetch_grade(total) {
               grade.innerHTML=""
               if (total >= 90) {
                              grade.innerHTML = "<h1>A+</h1>"
               } else if (total > 80 && total < 90) {
                              grade.innerHTML = "<h1>A</h1>"
               } else if (total > 60 && total <= 80) {
                              grade.innerHTML = "<h1>B+</h1>"
               } else if (total > 40 && total <= 60) {
                              grade.innerHTML = "<h1>B</h1>"
               } else if (total >= 33 && total <= 40) {
                              grade.innerHTML = "<h1>C</h1>"
               } else {
                              grade.innerHTML = "<h1>You Are FaiL</h1>"
               }
               showClass(total)
}

function showClass(total_per) {
               if (total_per >= 90) {
                              classs.innerHTML = "DISTICTION"
               } else if (total_per > 70 && total_per < 90) {
                              classs.innerHTML = "FIRST CLASS"
               } else if (total_per > 60 && total_per <= 70) {
                              classs.innerHTML = "SECOND CLASS"
               } else if (total_per > 45 && total_per <= 60) {
                              classs.innerHTML = "PASS"
               } else {
                              classs.innerHTML = "FAILS"
               }
}