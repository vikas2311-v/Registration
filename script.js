var pattern = /\s/g;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var alertp = document.getElementById('alert');

function checkWhiteSpace(input) {
    if (input.value.match(pattern)) {
        alertp.innerHTML = "** White Spaces are not allowed in Name";
        return false;
    }
    alertp.innerHTML = "";
    return true;
}

function checkEmail() {
    var user = document.getElementById("email").value;

    if (user.match(pattern)) {
        alertp.innerHTML = "** White Spaces are not allowed in Email";
        return false;
    }

    if (!user.match(emailPattern)) {
        alertp.innerHTML = "** Invalid Email Format";
        return false;
    }

    alertp.innerHTML = "";
    return true;
}

function checkPassword() {
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

function validatePassword() {
    var pass = document.getElementById("password").value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (pass !== confirmPassword) {
        alertp.innerHTML = "** Passwords do not match";
        return false;
    }

    alertp.innerHTML = "";
    return true;
}


function states() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var country = countrySelect.options[countrySelect.selectedIndex].value;

    stateSelect.innerHTML = "<option value=''>Select State</option>";
    if (country === "India") {
        stateSelect.innerHTML += "<option value='state1'>Karnataka</option>";
        stateSelect.innerHTML += "<option value='state2'>Maharashtra</option>";
        stateSelect.innerHTML += "<option value='state3'>Andhra Pradesh</option>";
    } else if (country === "China") {
        stateSelect.innerHTML += "<option value='state4'>Guangxi</option>";
        stateSelect.innerHTML += "<option value='state5'>Ningxia</option>";
        stateSelect.innerHTML += "<option value='state6'>Hebei</option>";
    } else if (country === "Korea") {
        stateSelect.innerHTML += "<option value='state7'>North Chung cheong</option>";
        stateSelect.innerHTML += "<option value='state8'>SouthChung cheong</option>";
        stateSelect.innerHTML += "<option value='state9'>Gangwon</option>";
    } else if (country === "Japan") {
        stateSelect.innerHTML += "<option value='state10'> Akita</option>";
        stateSelect.innerHTML += "<option value='state11'> Yamagata</option>";
        stateSelect.innerHTML += "<option value='state12'> Fukushima</option>";
    }

}

function validateForm() {
    if (!checkEmail() || !checkPassword()) {
        alertp.innerHTML = "* Please fill all details";
        return false;
    }
    return true;
}

function submitForm(event) {
    event.preventDefault();
    if (validateForm()) {
        window.location.href = "login.html";
        return true;
    }
    return false;
}
