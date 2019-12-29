let name ;
let email;
let phoneNumber;
let password;
let rePassword;
let address;
let birthDate;
let gender;

function nameChange(){
    name = document.getElementById("name").value;
}

function emailChange(){
    email = document.getElementById("email").value;
    if(isEmailValid(email)){
        document.getElementById("email").setAttribute("class","input-form")
    }else{
        document.getElementById("email").setAttribute("class","error")
    }
}

function phoneChange(){
    email = document.getElementById("email").value;
}

function passwordChange(){
    email = document.getElementById("email").value;
}

function rePasswordChange(){
    email = document.getElementById("email").value;
}

function addressChange(){
    email = document.getElementById("email").value;
}

function isNameValid(name){
    if(name.length = 0 || name.length > 60 ){
        return false;
    }else{
        return true;
    }
}

function isEmailValid(name){
    let emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    return name.match(emailRegex);
}

function isNameValid(name){
    if(name.length = 0 || name.length > 60 ){
        return false;
    }else{
        return true;
    }
}

function isNameValid(name){
    if(name.length = 0 || name.length > 60 ){
        return false;
    }else{
        return true;
    }
}

function isNameValid(name){
    if(name.length = 0 || name.length > 60 ){
        return false;
    }else{
        return true;
    }
}

function isNameValid(name){
    if(name.length = 0 || name.length > 60 ){
        return false;
    }else{
        return true;
    }
}
