// Dependencies
const input = require("readline-sync");
const chalk = require("chalk");
const Shelter = require("./shelter");
const Dog = require("./dog");
const Cat = require("./cat");
const Bird = require("./bird");
const RoboDog = require("./robo-dog");
const RoboCat = require("./robo-cat");
const RoboBird = require("./robo-bird");

//Chalk colors
function yellowText(message) {
  console.log(chalk.yellow(message));
}
function redText(message) {
  console.log(chalk.red(chalk.underline(message)));
}

// Starter pets
const dogStarter = new Dog("spot", 100);
const catStarter = new Cat("hairball", 101);
const birdStarter = new Bird("talon", 102);
const roboDogStarter = new RoboDog("poop machine", 103);
const roboCatStarter = new RoboCat("mechanized death", 104);
const roboBirdStarter = new RoboBird("big bomber", 105);

const currentShelter = new Shelter();

currentShelter.addPet(dogStarter);
currentShelter.addPet(catStarter);
currentShelter.addPet(birdStarter);
currentShelter.addPet(roboDogStarter);
currentShelter.addPet(roboCatStarter);
currentShelter.addPet(roboBirdStarter);
// Welcome message
console.log(`%c

.-------------.       .    .   *       *   
/_/_/_/_/_/_/_/ \         *       .   )    .
//_/_/_/_/_/_// _ \ __          .        .   
/_/_/_/_/_/_/_/|/ \.' .'-o                    
|             ||-'(/ ,--'                    
|             ||  _ |                        
|             ||'' ||                        
|_____________|| |_|L                     `);
console.log(
  `\nWelcome to the Shelter!!\nWe have fun and games!!\nand lots of pets!!!\n\nThe shelter cleanliness is currently ${
    currentShelter.sanitation
  }!\nDon't let it get too dirty...\n\n`
);
//Game loop
let quitCondition = true;
while (quitCondition) {
  const entryResponse = input.question(
    "What would you like to do?\n1. List current pets.\n2. Clean cages and litter boxes.\n3. Admit a pet to the shelter.\n4. Adopt a Pet.\n5. Delux Member Package!!\n6. Interact with one pet.\n7. Quit\n\n>> :"
  );
  switch (entryResponse) {
    case "1":
      console.table(currentShelter.listPets());
      break;
    case "2":
      currentShelter.sanitize();
      currentShelter.cleanLitterBox();
      yellowText("\nWe cleaned out the shelter\nKeep it clean!!\n");
      break;
    case "3":
      admitMenu();
      break;
    case "4":
      adoptMenu();
      break;
    case "5": //Feed, play, bathe all pets.
      currentShelter.allPets();
      yellowText(
        "\nWe cared for all your pets!!\n\nCheck their updated stats!\n\n"
      );
      break;
    case "6":
      const { petOptions, selectedPet } = selectPetMenu();
      singlePetMenu(petOptions, selectedPet);
      break;
    case "7":
      quitMessage();
      break;
    default:
      redText("\nPlease enter a valid response!\n");
  }
  tick();
  statValidation();
}
// Global functions
function selectPetMenu() {
  const selectedPet = currentShelter.selectPet(
    input.question(
      yellowText(
        "Please enter the name of the pet you want to interact with.\n >>:"
      )
    )
  );
  yellowText(`What would you like to do with ${selectedPet.name}\n`);
  const petOptions = input.question(
    `\nEnter\n1: to play with ${selectedPet.name}\n2: to feed ${
      selectedPet.name
    }\n3: to bathe ${selectedPet.name}\n >>:`
  );
  return { petOptions, selectedPet };
}

function singlePetMenu(petOptions, selectedPet) {
  if (petOptions === "1") {
    selectedPet.play();
    yellowText(
      `\nYou played with ${selectedPet.name}, their entertainment is now ${
        selectedPet.entertainment
      }\n`
    );
  } else if (petOptions === "2") {
    selectedPet.feed();
    yellowText(
      `\nYou fed ${selectedPet.name}, their energy is now ${
        selectedPet.energy
      }\n`
    );
  } else
    selectedPet.bathe(),
      yellowText(
        `\nYou washed ${selectedPet.name}, their hygiene is now ${
          selectedPet.hygiene
        }\n`
      );
}

function quitMessage() {
  console.log(
    `%c
    _______________________
  < Please don't abandon me! >
   -------------------------
          \\  ^__^
           \\ (00)\\_______
            \\/^/ \\       )\\/\\
              U  \||-----||
                 \||     ||`
  );
  console.log("\nThanks for playing! Come back soon!");
  quitCondition = false;
}

function adoptMenu() {
  yellowText("Thank you for choosing to adopt a current pet!");
  const petName = input.question(
    "\nEnter\n1: to adopt spot\n2: to adopt hairball\n3: to adopt talon\n4: to adopt poop machine\n5: to adopt mechanized death\n6: to adopt big bomber.\n\n>>:"
  );

  switch (petName) {
    case "1":
      dogStarter.adopt();
      console.table(currentShelter.listPets());
      yellowText(`\nYou adopted spot!!\n`);
      break;
    case "2":
      catStarter.adopt();
      console.table(currentShelter.listPets());
      yellowText(`\nYou adopted hairball!!\n`);
      break;
    case "3":
      birdStarter.adopt();
      console.table(currentShelter.listPets());
      yellowText(`\nYou adopted talon!!\n`);
      break;
    case "4":
      roboDogStarter.adopt();
      console.table(currentShelter.listPets());
      yellowText(`\nYou adopted poop machine!!\n`);
      break;
    case "5":
      roboCatStarter.adopt();
      console.table(currentShelter.listPets());
      yellowText(`\nYou adopted mechanized death!!\n`);
      break;
    case "6":
      roboBirdStarter.adopt();
      console.table(currentShelter.listPets());
      yellowText(`\nYou adopted big bomber!!\n`);
      break;
  }
}

function admitMenu() {
  const newPetName = input.question(
    yellowText(`\nEnter the name of the pet you'd like to add.\n>> :`)
  );
  const newPetType = input.question(
    `\nEnter the type of pet.\nYou can choose:\n1: Dog\n2: Cat\n3: Bird\n4: RoboDog\n5: RoboCat\n6: Robobird.\n>> :`
  );
  switch (newPetType) {
    case "1":
      const admittedDog = new Dog(newPetName, 106);
      admittedDog.adopt();
      currentShelter.addPet(admittedDog);
      admitConfirmation();
      break;
    case "2":
      const admittedCat = new Cat(newPetName, 107);
      admittedCat.adopt();
      currentShelter.addPet(admittedCat);
      admitConfirmation();
      break;
    case "3":
      const admittedBird = new Bird(newPetName, 108);
      admittedBird.adopt();
      currentShelter.addPet(admittedBird);
      admitConfirmation();
      break;
    case "4":
      const admittedRoboDog = new RoboDog(newPetName, 109);
      admittedRoboDog.adopt();
      currentShelter.addPet(admittedRoboDog);
      admitConfirmation();
      break;
    case "5":
      const admittedRoboCat = new RoboCat(newPetName, 110);
      admittedRoboCat.adopt();
      currentShelter.addPet(admittedRoboCat);
      admitConfirmation();
      break;
    case "6":
      const admittedRoboBird = new RoboBird(newPetName, 111);
      admittedRoboBird.adopt();
      currentShelter.addPet(admittedRoboBird);
      admitConfirmation();
      break;
    default:
      redText(`Please choose a valid option.`);
  }

  function admitConfirmation() {
    yellowText(
      `\n${newPetName} has been added to the shelter!\nCheck the shelter for an updated list!!\n`
    );
  }
  // console.table(currentShelter.listPets());
}

function tick() {
  return (
    currentShelter.litterBoxTick(),
    currentShelter.shelterTick(),
    redText(`Shelter cleanliness is now ${currentShelter.sanitation}!\n`)
  );
}

function statValidation() {
  currentShelter.allPetStats();
  //console.log(currentShelter.allPetStats());
}
