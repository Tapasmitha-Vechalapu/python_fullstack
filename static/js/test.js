console.log("hello world")
let student_name = "sriram"
console.log("Student name is:"+ student_name)
let student_age = 21
let course_name ="python full stack"
console.log("student age is :"+ student_age)
console.log("course name is :"+course_name)
let age =18
if(age>=18){
    console.log("Eligible for admission")
}
else{
    console.log("not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Iteration number:" + i)
}
student = {
    name: "sriram",
    age:21,
    course:"python full stack",

}
console.log("student details:",student)


function greetStudent(name){
    console.log("hello"+name+"welcome to nriit learning management system")
}
greetStudent(student_name)
function square(number) {
    return number * number;
}

console.log(square(5));  
function checkOddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkOddEven(10));
console.log(checkOddEven(7)); 
//write a code all are the even number 
