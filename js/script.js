// DONE CARD OPENING AND CLOSING LOGIC
let headers = document.querySelectorAll(".done-card");

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openDoneWork);
}

function openDoneWork() {
    this.classList.toggle('done-card--open');
}


// FORM LOGIC 
let form = document.querySelector(".form");
let contactName;
let contactEmail;
let contactMessage;

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateForm() {
    contactName = document.forms[0]["name"].value;
    contactEmail = document.forms[0]["email"].value;
    contactMessage = document.forms[0]["message"].value;
    let error = "";

    if (contactEmail == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(contactEmail)) {
        error += "Please enter a valid email address.\n";
    }

    if (contactMessage == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
}

const sendEmail = () => {
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMessage);

    Email.send({
        SecureToken : "becd85e1-4c1a-45cb-9ae7-6c76fa8b3530",
        To : "skylar.dryden@gmail.com",
        From : "skylar.dryden@gmail.com",
        Subject : "A message from " + contactName,
        Body : contactMessage + " || Their email address is: " + contactEmail
        }).then(
            // Replace with nicer feedback for email send.
        message => alert(message)
    );
}

const handleContactSubmit = (e) => {
    e.preventDefault();
    validateForm();
    sendEmail();
}

form.addEventListener("submit", handleContactSubmit);