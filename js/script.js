// ===== CARD COMPONENT TOGGLE LOGIC
let cardComponent = document.querySelector(".card-component");
let colourToggle = document.querySelector(".toggle-button__checkbox--colour");
let fontToggle = document.querySelector(".toggle-button__checkbox--font");

colourToggle.addEventListener("change", () => {
    if (cardComponent.classList.contains("card-component--light")) {
        cardComponent.classList.remove("card-component--light");
        cardComponent.classList.add("card-component--dark");
    } else {
        cardComponent.classList.remove("card-component--dark");
        cardComponent.classList.add("card-component--light");
    }
});

fontToggle.addEventListener("change", () => {
    cardComponent.classList.toggle("card-component--large-font");
});

// ===== DONE CARD OPENING AND CLOSING LOGIC
let headers = document.querySelectorAll(".done-card");

const openDoneWork = (event) => {
    event.currentTarget.classList.toggle("done-card--open");
}

headers.forEach(header => {
    header.addEventListener("click", openDoneWork);
});


// ===== FORM LOGIC 
let form = document.querySelector(".form");
let contactName;
let contactEmail;
let contactMessage;

let contactHeader = document.querySelector(".js-contact-success");
let contactForm = document.querySelector(".form");

// Personal Privacy
let sendPoint;
const privacyFunc = () => {
    let firstPrivRun = "c2t5bGFy";
    let secPrivRun = "ZHJ5ZGVu";
    let thirPrivRun = "Z21haWw=";

    sendPoint = atob(firstPrivRun) + "." + atob(secPrivRun) + "@" + atob(thirPrivRun) + ".com";
}

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateForm = () => {
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

const contactSuccess = () => {
    contactForm.style.display = "none";
    contactHeader.innerHTML = "thank you for reaching out :)";
}

const sendEmail = () => {
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMessage);

    privacyFunc();

    Email.send({
        SecureToken : "becd85e1-4c1a-45cb-9ae7-6c76fa8b3530",
        To : sendPoint,
        From : sendPoint,
        Subject : "A message from " + contactName,
        Body : contactMessage + " || Their email address is: " + contactEmail
        }).then(
            // Replace with nicer feedback for email send.
            console.log("Success")
    );
}

const handleContactSubmit = (e) => {
    e.preventDefault();
    validateForm();
    sendEmail();
    contactSuccess();
}

form.addEventListener("submit", handleContactSubmit);