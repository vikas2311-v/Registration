var pattern = /\s/g;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var alerte = document.getElementById('emailError');
var alertp = document.getElementById('passwordError');

function white() {
    var user = document.getElementById("email").value;

    if (user.match(pattern)) {
        alerte.innerHTML = "** White Spaces are not allowed in Email";
        return false;
    }

    if (!user.match(emailPattern)) {
        alerte.innerHTML = "** Invalid Email Format";
        return false;
    }

    alertp.innerHTML = "";
    return true;
}

function black() {
    var pass = document.getElementById("password").value;

    if (pass.match(pattern)) {
        alertp.innerHTML = "** White Spaces are not allowed in Password";
        return false;
    }

    if (!pass.match(passwordPattern)) {
        alertp.innerHTML = "* Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character";
        return false;
    }

    alertp.innerHTML = "";
    return true;
}

function validateForm() {
    if (!white() || !black()) {
        alertp.innerHTML = "* Please fill all details";
        return false;
    }
    return true;
}

function submitForm(event) {
    event.preventDefault();
    if (validateForm()) {
        window.location.href = "welcome.html";
    }
}
