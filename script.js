// default Parameters;

function myname(a = 2, b = 5) {
  return a * b;
}

const data = myname(4, 5);
const data2 = myname();
const data3 = myname(3, "");
const data4 = myname(null, 4);
const data5 = myname(undefined, 4);

console.log(
  `data: ${data} and data2: ${data2} data3: ${data3} and data3: ${data3} and data5: ${data5} `
);

//  Spread Operator

const num1 = [4, 5, 6, 7];
const num2 = [6, 8, 9, 6, 8];

const newArray = [num1, ...num2];

const newArray2 = [...num1, ...num2];
console.log(newArray, newArray2);

let element = "";
console.log(names);
function spreads() {
  for (let i = 0; i < names.length; i++) {
    element += names[i];
  }
  console.log(element);
}

let names = "Aanand Shukla";

spreads(...names);

//  Rest Parameter

function spreads(...ab) {
  for (let i = 0; i < ab.length; i++) {
    element += ab[i];
  }
  console.log(element);
}

let names1 = "Aanand Shukla";

spreads(...names1);
