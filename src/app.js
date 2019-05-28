// Dependencies
const input = require("readline-sync");
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
const catStarter = new Cat("Hairball", 101);
const birdStarter = new Bird("Talon", 102);
const roboDogStarter = new RoboDog("Poop Machine", 103);
const roboCatStarter = new RoboCat("Mechanized Death", 104);
const mechBirdStarter = new MechBird("B2 Bomber", 105);

const currentShelter = new Shelter();

currentShelter.addPet(dogStarter);
currentShelter.addPet(catStarter);
currentShelter.addPet(birdStarter);
currentShelter.addPet(roboDogStarter);
currentShelter.addPet(roboCatStarter);
currentShelter.addPet(mechBirdStarter);

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
  "\nWelcome to the Shelter!!\nWe have fun and games!!\nand lots of pets!!!\n"
);
let quitCondition = true;
while (quitCondition) {
  const entryResponse = input.question(
    "What would you like to do?\n1. List current pets\n2. Clean cages\n3. Admit a pet to the shelter\n4. Adopt a Pet\n5. Placeholder\n6. Quit\n\n>> :"
  );
  switch (entryResponse) {
    case "1":
      console.table(currentShelter.listPets());
      break;
    case "2":
      // Clean cages will concurrently play, feed and bathe all pets.
      break;

    case "3":
      admitMenu();
      break;
    case "4":
      adoptMenu();
      break;
    case "5":
      break;
    case "6":
      quitMessage();
      break;
    default:
      console.log("Please enter a valid response!");
  }

  // const userResponse = input.question(
  //   "\nHow would you like to interact with your pet?\n" +
  //     `Enter "1" for ${blueText("Show pet stats")}\n` +
  //     `Enter "2" for ${blueText("Feed")}\n` +
  //     `Enter "3" for ${blueText(
  //       "Play"
  //     )} this will increase entertainment and decrease energy and hygiene!\n` +
  //     `Enter "4" for ${blueText("Bathe")}\n` +
  //     `Enter "5" for ${blueText("Quit")}\n\n`
  // );

  // switch (userResponse) {
  //   case "1":
  //     showStats();
  //     break;
  //   case "2":
  //     petFeed();
  //     break;
  //   case "3":
  //     petPlay();
  //     break;
  //   case "4":
  //     petClean();
  //     break;
  //   case "5":
  //     quitMessage();
  //     break;
  //   default:
  //     console.log(
  //       "\nInvalid response. Please input a valid response from the menu\n"
  //     );
  //     break;
  // }
}

function showStats() {
  console.log(
    "\nEnergy is: " +
      `${newUser.energy}` +
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
  console.log("\nYou wash your dirty pet!!!!");
  newPet.bathe();
  console.log("Your pet plays in the water while you wash it!!!!");
  console.log(
    "Your pet gained 10 'cleanliness'! Their hygiene is now " +
      `${newPet.hygiene}`
  );
}

function quitMessage() {
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
  console.log("\nThanks for playing! Come back soon!");
  quitCondition = false;
}

function adoptMenu() {
  console.log(" Thank you for choosing to adopt a new pet!");
  const petName = input.question(
    "Enter the name of the pet you would like to adopt\n\n>>:"
  );

  switch (petName) {
    case "Spot":
      dogStarter.adopt();
      console.table(currentShelter.listPets());
      console.log(`\nyou adopted ${petName}`);
      break;
    case "Hairball":
      catStarter.adopt();
      console.table(currentShelter.listPets());
      console.log(`\nyou adopted ${petName}!`);
      break;
    case "Talon":
      birdStarter.adopt();
      console.table(currentShelter.listPets());
      console.log(`\nYou adopted ${petName}!`);
      break;
    case "Poop Machine":
      roboDogStarter.adopt();
      console.table(currentShelter.listPets());
      console.log(`\nYou adopted ${petName}!`);
      break;
    case "Mechanized Death":
      roboCatStarter.adopt();
      console.table(currentShelter.listPets());
      console.log(`\nYou adopted ${petName}!`);
      break;
    case "B2 Bomber":
      mechBirdStarter.adopt();
      console.table(currentShelter.listPets());
      console.log(`\nYou adopted ${petName}!`);
      break;
  }
}

function admitMenu() {
  const newPetName = input.question(
    `Enter the name of the pet you'd like to add.\n`
  );
  const newPetType = input.question(
    `Enter the type of pet.\n You can choose:\n 1: Dog\n 2: Cat\n 3: Bird\n 4: RoboDog\n 5: RoboCat\n 6: Mechbird.\n`
  );
  switch (newPetType) {
    case "1":
      const admittedDog = new Dog(newPetName, 106);
      admittedDog.adopt();
      currentShelter.addPet(admittedDog);
      console.table(currentShelter.listPets());
      break;
    case "2":
      const admittedCat = new Cat(newPetName, 107);
      admittedCat.adopt();
      currentShelter.addPet(admittedCat);
      console.table(currentShelter.listPets());
      break;
    case "3":
      const admittedBird = new Bird(newPetName, 108);
      admittedBird.adopt();
      currentShelter.addPet(admittedBird);
      console.table(currentShelter.listPets());
      break;
    case "4":
      const admittedRoboDog = new RoboDog(newPetName, 109);
      admittedRoboDog.adopt();
      currentShelter.addPet(admittedRoboDog);
      console.table(currentShelter.listPets());
      break;
    case "5":
      const admittedRoboCat = new RoboCat(newPetName, 110);
      admittedRoboCat.adopt();
      currentShelter.addPet(admittedRoboCat);
      console.table(currentShelter.listPets());
      break;
    case "6":
      const admittedMechBird = new MechBird(newPetName, 111);
      admittedMechBird.adopt();
      currentShelter.addPet(admittedMechBird);
      console.table(currentShelter.listPets());
    default:
  }
  // console.table(currentShelter.listPets());
}
