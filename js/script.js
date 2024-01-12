
const windowSizeListener = () => {
    console.log("Hello");

}

window.onresize = windowSizeListener;


console.log(window.innerWidth);
let headers = document.querySelectorAll(".done-card");
console.log(headers);


for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openDoneWork);
}

function openDoneWork() {
    this.classList.toggle('done-card--open');
}