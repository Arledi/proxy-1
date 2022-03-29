
//Dashboard blocks background color on click time
const secondContent = document.querySelector(".secondContent");
const firstContent = document.querySelector(".firstContent");

firstContent.addEventListener("click", function (e) {
    if (secondContent.classList.contains("activebgcolor")) {
        secondContent.classList.remove("activebgcolor");
    }
    this.classList.add("activebgcolor");
});
secondContent.addEventListener("click", function (e) {
    console.log(this, "secondContent");
    if (firstContent.classList.contains("activebgcolor")) {
        firstContent.classList.remove("activebgcolor");
    }
    this.classList.add("activebgcolor");
});
