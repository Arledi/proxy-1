//sidebar background color on click time

const DashboardMenuLinks = document.querySelectorAll("li");

for (let i = 0; i < DashboardMenuLinks.length; i++) {
    DashboardMenuLinks[i].addEventListener("click", () => {
        DashboardMenuLinks[i].classList.add("bgcolor");
        DashboardMenuLinks[i].classList.remove("hover");
        for (let j = 0; j < DashboardMenuLinks.length; j++) {
            DashboardMenuLinks[j].addEventListener("click", () => {
                DashboardMenuLinks[i].classList.add("hover");
                DashboardMenuLinks[i].classList.remove("bgcolor");
                DashboardMenuLinks[j].classList.add("bgcolor");
            });
        }
    });
}



//Dashboard blocks background color on click time
const firstBlock = document.querySelector(".firstBlock");
const secondBlock = document.querySelector(".secondBlock");
const DashboardImg = document.querySelector(".DashboardImg");
firstBlock.addEventListener("click", function handleClick(e) {
    if (secondBlock.classList.contains("active")) {
        secondBlock.classList.remove("active");
    }
    this.classList.add("active");
    DashboardImg.style = `
    margin-top: 5.2vw;
    width: 73.4vw;
    height: 30.8vw;
    background-image: url("../img/dashboardIcons/Dashboard2.svg");
    background-size: cover;
    background-repeat: no-repeat;
    `;
});
secondBlock.addEventListener("click", function handleClick(e) {
    if (firstBlock.classList.contains("active")) {
        firstBlock.classList.remove("active");
    }
    this.classList.add("active");
    DashboardImg.style = `
    margin-top: 5.2vw;
    width:73.4vw;
    height:30.8vw;
    background-image: url("../img/dashboardIcons/Dashboard.png");
    background-size: cover;
    background-repeat: no-repeat;
    `;
});
