let password = document.querySelector("#password");
let password_confirm = document.querySelector("#password_confirm");

function validatePassword(){
    if(password.value != password_confirm.value) {
        password_confirm.setCustomValidity("Passwords don't match!");
    } else {
        password_confirm.setCustomValidity("")
    }
}

password.onchange = validatePassword;
password_confirm.onkeyup = validatePassword;