/* eslint-disable indent */
// console.log("hier komt de password check");

const register = document.getElementById("register");
const password = document.getElementById("password");
// var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



console.log(password);

register.addEventListener('submit', (e) => {

    const passwordLength = 7;


    if(password.value.length < passwordLength){
        console.log("password should atleast contain 7 letters");
        password.classList.add("error");
        e.preventDefault();
    }else if(password.value.search(/[a-z]/i) < 0){
        console.log("Your password must contain atleast one letter");
        password.classList.add("error");
        e.preventDefault();
    }else if(password.value.search(/[0-9]/) < 0){
        console.log("Your password must contain one digit");
        password.classList.add("error");
        e.preventDefault();
    }else if(password.value.search(/[!@#$%^&*]/) < 0){
        console.log("your password should contain one special character");
        password.classList.add("error");
        e.preventDefault();
    }else{
        console.log("heel goed!");
    }
    // e.preventDefault();
	// console.log(e);

});