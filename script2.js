//creo le variabili richiamando gli id degli input

let petNameInput = document.getElementById("petNameInput");
let ownerNameInput = document.getElementById("ownerNameInput");
let speciesInput = document.getElementById("speciesInput");
let breedInput = document.getElementById("breedInput");
let submitButton = document.getElementById("addBtt");

//creo la variabile lista richiamando id

let petList = document.getElementById("petList");

let pets = [];

//creo la classe

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // attraverso la funzione if verifico se l'animale in oggetto ha lo stesso padrone di un altro
  isSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

// funzione per generare la lista di animali
const petLists = function () {
  pets.forEach((Pet) => {
    const newListAdd = document.createElement(li);
    newListAdd.innerText =
      "Nome pet: " + pet.petName + ", la specie e': " + pet.species + ", proprietario: " + pet.ownerName;
    petList.appendChild(newListAdd);
  });
};

const formNode = document.querySelector("form");
formNode.onsubmit = function (e) {
  e.preventDefault();
  let otherPet = new Pet(petNameInput.value, ownerNameInput.value, speciesInput.value, breedInput.value);
  pets.push(otherPet);
  petLists();
  console.log("Form inviato correttamente.");
};
