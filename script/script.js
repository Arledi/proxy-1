const ProxyUPMainTitle = document.querySelector("#ProxyUPMainTitle");
ProxyUPMainTitle.addEventListener("click", () => {
    location.href = "http:index.html";
});

const PageYear = document.querySelector(".year");
PageYear.innerHTML = `
© ${new Date().getFullYear()} ProxyUP, All Rights Reserved
`;

