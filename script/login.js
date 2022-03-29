const PageYear = document.querySelector(".year");
PageYear.innerHTML = `
© ${new Date().getFullYear()} ProxyUP, All Rights Reserved
`;

// toggle password visibility

const passwordToggle = document.querySelector("#passwordToggle");
const eyeOff = document.querySelector(".eye-off");
const eye = document.querySelector(".eye");
const password = document.querySelector("#password");

passwordToggle.addEventListener("click", () => {
    const type =
        password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    if (type === "password") {
        eye.style.display = "none";
        eyeOff.style.display = "block";
    } else {
        eye.style.display = "block";
        eyeOff.style.display = "none";
    }
});

// preventDefault Form

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// });
