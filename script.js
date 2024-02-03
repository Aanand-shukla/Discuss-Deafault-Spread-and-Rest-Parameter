const data = [3, 45, 67, 89, 2, 56];

const [first, second, third, fourth] = data;

console.log(first, second, third, fourth);

const [...mydata] = data;
console.log(mydata);

const { 5: fifth } = data;

console.log(fifth);

const Breeds = {
  firstDogBreedName: "pitbull",
  secondDogBreedName: "German  Sheferd",
  adress: {
    fA: "America",
    sA: "Germany",
  },
};

const { firstDogBreedName, secondDogBreedName } = Breeds;
console.log(firstDogBreedName, secondDogBreedName);

const { ...BreedsD } = Breeds;
console.log(BreedsD);

const {
  adress: { fA, sA: Second },
} = Breeds;
console.log(fA, Second);

//  diffrent Ways to selecting Elements

// getElementById:

// Use Case: Ideal for selecting a single element with a unique ID.
// Specificity: Very high specificity since IDs must be unique within the document.
// Performance: Efficient and direct access.
// Return Type: Returns the element or null if not found

let element1 = document.getElementById("fourth");
console.log(element1, typeof element1);

// getElementsByClassName:

// Use Case: Suitable for selecting multiple elements with a common class.
// Specificity: Medium specificity as classes can be shared among elements.
// Performance: Generally performs well but returns a live HTMLCollection.
// Return Type: Live HTMLCollection.

let element2 = document.getElementsByClassName("third");
console.log(element2, typeof element2);

// element2.textContent = "new Text Content";
element2.innerText = "new inner Txt";
