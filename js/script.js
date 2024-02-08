// DONE CARD OPENING AND CLOSING LOGIC
let headers = document.querySelectorAll(".done-card");

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openDoneWork);
}

function openDoneWork() {
    this.classList.toggle('done-card--open');
}

// FORM LOGIC 
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var error = "";

    if (name == "") {
        error += "Please enter your name.\n";
    }

    if (email == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }

    if (message == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
