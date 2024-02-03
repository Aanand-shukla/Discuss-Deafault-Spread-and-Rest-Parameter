let data = document.querySelector("h2");
data.setAttribute("id", "heading");
console.log(data.getAttribute("id"));

let myData = document.querySelector("li:nth-child(1)");
let dta = document.createElement("span");
dta.innerText = " My Text is Showing";
myData.appendChild(dta);

let myDataS = document.querySelector("li:nth-child(2)");

myDataS.append(" my data is the Text Node");
