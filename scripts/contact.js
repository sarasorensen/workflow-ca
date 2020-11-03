//validate membership form
var contactForm = document.getElementById("contactForm");
var message = document.getElementById("message");

//Function for validating that there is input in first name 
function validateName(name) {
    if (name.trim().length === 0) {
        return false;
    }
    return true;
}
//Function for validating that there is input in last name 
function validateLastName(lName) {
    if (lName.trim().length === 0) {
        return false;
    }
    return true;
}
function validatePhone(phone) {
    if (
        phone.search(
            /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/
        )
    ) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email.search(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        return false;
    }
    return true;
}


function validateDetails(details) {
    if (details == null || details == "") {
        return false;
    } return true;
}


//Function for submitting contact form
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let validationPassed = true;

    // error message
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const messageError = document.getElementById("messageError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");

    // Inputs
    const name = document.getElementById("firstName");
    const lName = document.getElementById("lastName");
    const details = document.getElementById("details");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    // Variables for input value
    const nameValue = name.value;
    const lNameValue = lName.value;
    const detailsValue = details.value;
    const phoneValue = phone.value;
    const emailValue = email.value;

    if (validateDetails(detailsValue)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        validationPassed = false;
    }


    //Checks first name input, and displays error message or not 
    if (validateName(nameValue)) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
        validationPassed = false;
    }

    //Checks last name input, and displays error or not 
    if (validateLastName(lNameValue)) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
        validationPassed = false;
    }
    //Checks phone input
    if (validatePhone(phoneValue)) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
        validationPassed = false;
    }

    //Checks email input
    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    //Alert if the form passed or not
    if (validationPassed) {
        var pMessage = document.getElementById("validation-passed-message");
        document.getElementById("validation-passed-message").style.display =
            "block";
        var pMessage = document.getElementById("validation-false");
        document.getElementById("validation-false").style.display = "none";
    } else {
        var pMessage = document.getElementById("validation-false");
        document.getElementById("validation-false").style.display = "block";

        var pMessage = document.getElementById("validation-passed-message");
        document.getElementById("validation-passed-message").style.display = "none";
        validationPassed = false;
    }
});