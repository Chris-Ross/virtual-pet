// Dependencies
const input = require("readline-sync");
const virtualPet = require("./virtual-pet");
const chalk = require("chalk");
const blueText = chalk.blue;
// New instance of virtualPet
const newPet = new virtualPet(50, 50, 50);
// \n is a linebreak command.
// Welcome message and first interactive options.
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
    "\nWelcome to the Jungle!!\n We have fun and games!!\n Choose which pet you wish to have!!!\n They are here to entertain!!!\n"
  );
 
if (entryResponse === "1")




























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

function shelterMenu() {
const entryResponse = input.question("What would you like to do?\n  1. List current pets\n  2. Adopt a new pet\n  3. Return a current pet\n  4. Quit\n\n>> :");
}