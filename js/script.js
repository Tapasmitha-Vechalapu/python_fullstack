alert("welcome to NRIIT  learning management system")
let heading = document.getElementById("welcome");
heading.innerHTML = "welcome future software engineers"
console.log("Heading element:",heading)
let msg = document.getElementById("message")
msg.innerHTML = "javascript is fun"
console.log("message element:",msg)
function showmessage(){
    alert("welcome to nriit learning management system")}
function changeHeading() {
    document.getElementById("welcome").
    innerHTML = "welcome Python Fullstack Developer"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element:",heading)
let button = document.getElementById("btnGreeting");
button.addEventListener("click",function(){
    alert("welcome to javascript Event handling");
}); 
let registerForm = document.getElementById ("registerForm");
registerForm.addEventListener("submit" ,function (event) {
    event.pteventdefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name || !email || !password) {
        alert("please fill in all fields.");
        return;
    }
    alert("registrattion successfull!");
    console.log("Name:", name);
    console.log("Email:",email);
    console.log("password:",password)
   
});
