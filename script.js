var pattern = /\s/g;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
var passwordPattern = /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
var alertp = document.getElementById('alert');


function checkFirstName() {
    var firstName = document.getElementById("firstName").value;
    var firstNameError = document.getElementById("firstNameError");
    if (firstName.match(pattern)) {
        firstNameError.textContent = "* White Spaces are not allowed in Fist Name";
        return false;
    }
    firstNameError.textContent = "";
    return true;
}

function checkLastName() {
    var lastName = document.getElementById("lastName").value;
    var lastNameError = document.getElementById("lastNameError");
    if (lastName.match(pattern)) {
        lastNameError.textContent = "* White Spaces are not allowed in Last Name";
        return false;
    }
    lastNameError.textContent = "";
    return true;
}


function checkEmail() {
    var user = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    if (user.match(pattern)) {
        emailError.innerHTML = "* White Spaces are not allowed in Email";
        return false;
    }

    if (!user.match(emailPattern)) {
        emailError.innerHTML = "* Invalid Email Format";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}

function checkPassword() {
    var pass = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");

    if (pass.match(pattern)) {
        passwordError.innerHTML = "* White Spaces are not allowed in Password";
        return false;
    }

    if (!pass.match(passwordPattern)) {
        passwordError.innerHTML = "* Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character";
        return false;
    }

    passwordError.innerHTML = "";
    return true;
}

function validatePassword() {
    var pass = document.getElementById("password").value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var confirmError = document.getElementById('confirmError');

    if (pass !== confirmPassword) {
        confirmError.innerHTML = "** Passwords do not match";
        return false;
    }

    confirmError.innerHTML = "";
    return true;
}

function togglePassword(inputId) {
    var x = document.getElementById(inputId);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validateDate() {
    var inputDate = new Date(document.getElementById('date').value);
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (inputDate > currentDate) {
        dateError.innerHTML = "Date of birth cannot be in the future";
        return false;
    }
    return true;
}


function autocompleteCity(input) {
    var cities = ["Bangalore", "Chennai", "Coimbatore", "Delhi", "New York", "Busan", "Incheon", "Daegu", "Shanghai", "Shenzhen", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

    var container = document.getElementById("autocomplete-container");
    container.innerHTML = '';

    var val = input.value.toLowerCase();
    if (!val) return false;

    cities.forEach(function(city) {
        if (city.toLowerCase().indexOf(val) > -1) {
            var div = document.createElement("div");
            div.textContent = city;
            div.addEventListener("click", function(e) {
                input.value = this.textContent;
                container.innerHTML = '';
            });
            container.appendChild(div);
        }
    });

    container.style.display = 'block';
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
    var firstNameValid = checkFirstName();
    var lastNameValid = checkLastName();
    var emailValid = checkEmail();
    var passwordValid = checkPassword();
    var confirmPasswordValid = validatePassword();
    var dateValid = validateDate()
    var cityValid = document.getElementById("city").value.trim() !== "";
    var stateValid = document.getElementById("state").value.trim() !== "";
    var countryValid = document.getElementById("country").value.trim() !== "";
    var genderValid = document.querySelector('input[name="gender"]:checked');
    var languageValid = document.querySelectorAll('input[name="language"]:checked').length > 0;


    if (!firstNameValid || !lastNameValid || !emailValid || !passwordValid || !confirmPasswordValid || !dateValid || !cityValid || !stateValid || !countryValid || !genderValid || !languageValid) {
        document.getElementById('alert').innerHTML = "* Please fill all details";
        return false;
    }
    return true;
}



function submitForm(event)

{
    event.preventDefault();
    if (validateForm()) {
        window.location.href = "login.html";
        return true;
    }
    return false;
}
