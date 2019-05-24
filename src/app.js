// Dependencies
const input = require("readline-sync");
const VirtualPet = require("./virtual-pet");
const chalk = require("chalk");
const Shelter = require("./shelter");
const Dog = require("./dog");
const Cat = require("./cat");
const Bird = require("./bird");
const RoboDog = require("./robo-dog");
const RoboCat = require("./robo-cat");
const MechBird = require("./mech-bird");

//Chalk colors
const blueText = chalk.blue;

// Starter pets
const dogStarter = new Dog("Spot", 100);
const catStarter = new Cat("Fucker", 101);
const birdStarter = new Bird("Annoyance", 103);
const roboDogStarter = new RoboDog("Poop Machine", 104);
const roboCatStarter = new RoboCat("Mechanized Death", 105);
const mechBirdStarter = new MechBird("B2 Bomber", 106);

const currentShelter = new Shelter();

currentShelter.addPet(dogStarter);
currentShelter.addPet(catStarter);
currentShelter.addPet(birdStarter);
currentShelter.addPet(roboDogStarter);
currentShelter.addPet(roboCatStarter);
currentShelter.addPet(mechBirdStarter);

console.log(
  `%c
  _______________________
< Please don't abandon me! >
 -------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
);
console.log("Hello!\nWelcome to Virtual Pet!!!");
let quitCondition = true;
while (quitCondition) {
  console.log(
    "\nWelcome to the Jungle!!\n  We have fun and games!!\n   Choose which pet you wish to have!!!\n    They are here to entertain!!!\n"
  );
  const entryResponse = input.question(
    "What would you like to do?\n  1. List current pets\n  2. Adopt a new pet\n  3. Return a current pet\n  4. Quit\n\n>> :"
  );
  switch (entryResponse) {
    case "1":
      console.table(currentShelter.listPets());
      break;
    case "2":
      adoptMenu();
      break;
  }

  const userResponse = input.question(
    "\nHow would you like to interact with your pet?\n" +
      `Enter "1" for ${blueText("Show pet stats")}\n` +
      `Enter "2" for ${blueText("Feed")}\n` +
      `Enter "3" for ${blueText(
        "Play"
      )} this will increase entertainment and decrease energy and hygiene!\n` +
      `Enter "4" for ${blueText("Bathe")}\n` +
      `Enter "5" for ${blueText("Quit")}\n\n`
  );

  switch (userResponse) {
    case "1":
      showStats();
      break;
    case "2":
      petFeed();
      break;
    case "3":
      petPlay();
      break;
    case "4":
      petClean();
      break;
    case "5":
      quitMessage();
      break;
    default:
      console.log(
        "\nInvalid response. Please input a valid response from the menu\n"
      );
      break;
  }
}

function showStats() {
  console.log(
    "\nEnergy is: " +
      `${newPet.energy}` +
      " Entertainment is: " +
      `${newPet.entertainment}` +
      " hygiene is: " +
      `${newPet.hygiene}`
  );
}

function petFeed() {
  console.log("\nYou feed your pet an scooby snack!!!!!");
  newPet.feed();
  console.log("Your pet finished their scooby snack!!!");
  console.log(
    "Your pet gained 10 'food'! Their energy is now " + `${newPet.energy}`
  );
}

function petPlay() {
  console.log("\nYou play fetch with your pet!!!!");
  newPet.play();
  console.log("Your pet retrieved the ball!!");
  console.log(
    "Your pet gained 10 'joy'! Their entertainment is now " +
      `${newPet.entertainment}`
  );
}

function petClean() {
  console.log("\nYou bathe your dirty pet!!!!");
  newPet.bathe();
  console.log("Your pet plays in the water while you wash it!!!!");
  console.log(
    "Your pet gained 10 'cleanliness'! Their hygiene is now " +
      `${newPet.hygiene}`
  );
}

function quitMessage() {
  console.log(`%c

    .-------------.       .    .   *       *   
   /_/_/_/_/_/_/_/ \         *       .   )    .
  //_/_/_/_/_/_// _ \ __          .        .   
 /_/_/_/_/_/_/_/|/ \.' .'-o                    
  |             ||-'(/ ,--'                    
  |             ||  _ |                        
  |             ||'' ||                        
  |_____________|| |_|L                     `);
  console.log("\nThanks for playing! Come back soon!");
  quitCondition = false;
}

function adoptMenu() {
  const petType = input.question(
    " Thankyou for choosing to adopt a new pet!\n What type of pet would you like? \n 1. Dog\n 2. Cat\n 3. Bird\n 4. Robotic Dog\n 5. Robotic Cat\n 6. Mechanized Bird\n\n >> :"
  );
  switch (petType) {
    case "1":
      const newName = input.question(
        "What would you like to name your new Dog?\n\n >> :"
      );
      let newUserPet = new Dog(newName, 150);
      console.log(newName);
      console.log(newUserPet);
      break;
  }
}
