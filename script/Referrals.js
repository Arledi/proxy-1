const emailInput = document.querySelector("#emailInput");
const emaisDiv = document.querySelector(".emailsDiv");
const emailsDivContainer = document.querySelector(".emailsDivContainer");
const emails = [];
 const arr=[];
            const newarr=null;
function addEmail() {
    emailInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
             emails.push({id:Math.random(),text:e.target.value,});
             e.target.value = "";
             drowEmailValues(emails);
        }
    });
}

function drowEmailValues(emails) {
    emails.splice(emails.length - 1).forEach((email) => {
        if (email.text !== "") {
            const span = document.createElement("span");
            span.innerHTML = `${email.text} `;
            const imgTag = document.createElement("img");
            imgTag.setAttribute("src", "../img/dashboardIcons/x.svg");
            imgTag.setAttribute("class", "Closeimg");
            const div = document.createElement("div");
            div.setAttribute("class", "singleEmail");
            div.append(span,imgTag);
            return emailsDivContainer.append(div);
        }
    });
}

function deleteEmail(){
   
}

addEmail();
deleteEmail()