let headers = document.querySelectorAll(".accolade__done-header-wrapper")
console.log(headers);


for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openDoneWork);
}
  

function openDoneWork() {
    this.classList.toggle('accolade__done-header-wrapper--open')
}