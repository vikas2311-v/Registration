body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#firstname,
#lastname,
#email,
#password,
#confirmPassword,
#date,
#city,
#state,
#country {
    width: calc(100% - 22px);
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
    margin-right: 10px;
}

#register {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#register:hover {
    background-color: #20badd;
}

@media screen and (max-width: 600px) {
    div.container div input[type="radio"] {
        width: calc(50% - 15px);
        margin-right: 5px;
        margin-bottom: 5px;
    }
    div.container div input[type="radio"]:nth-child(odd) {
        clear: left;
    }
}

@media screen and (max-width: 600px) {
    div.container div input[type="checkbox"] {
        width: calc(50% - 15px);
        margin-right: 5px;
        margin-bottom: 5px;
    }
    div.container div input[type="checkbox"]:nth-child(odd) {
        clear: left;
    }
}
