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