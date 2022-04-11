/* eslint-disable indent */
// console.log("hier komt de password check");

const register = document.getElementById("register");
const password = document.getElementById("password");
const span = document.querySelector(".password-error");
// var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

console.log(password);

register.addEventListener('submit', (e) => {

    const passwordLength = 7;


    if(password.value.length < passwordLength){
        password.classList.add("error");
        span.innerText = "Password should atleast contain 7 letters";
        e.preventDefault();

    }else if(password.value.search(/[a-z]/i) < 0){
        password.classList.add("error");
        span.innerText = "Password must contain atleast one letter";
        e.preventDefault();

    }else if(password.value.search(/[0-9]/) < 0){
        password.classList.add("error");
        span.innerText = "Password must contain one digit";
        e.preventDefault();

    }else if(password.value.search(/[!@#$%^&*]/) < 0){
        password.classList.add("error");
        span.innerText = "Password must contain one special character";
        e.preventDefault();

    }else{
        console.log("heel goed!");
    }


});