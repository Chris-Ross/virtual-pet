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
< Please dont abandon me! >
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
  // switch (key) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }
  switch (userResponse) {
    case "1":
      showstats();
      break;
    case "2":
      petfeed();
      break;
    case "3":
      petplay();
      break;
    case "4":
      petclean();
      break;
    case "5":
      quitmessage();
    default:
      console.log(
        "\nInvalid response. Please input a valid response from the menu\n"
      );
      break;
  }
}

function showstats() {
  console.log(
    "\nEnergy is: " +
      `${newPet.energy}` +
      " Entertainment is: " +
      `${newPet.entertainment}` +
      " hygiene is: " +
      `${newPet.hygiene}`
  );
}

function petfeed() {
  console.log("\nYou feed your pet an scooby snack!!!!!");
  newPet.feed();
  console.log("Your pet finished their scooby snack!!!");
  console.log(
    "Your pet gained 10 'food'! Their energy is now " + `${newPet.energy}`
  );
}

function petplay() {
  console.log("\nYou feed your pet an scooby snack!!!!!");
  newPet.feed();
  console.log("Your pet finished their scooby snack!!!");
  console.log(
    "Your pet gained 10 'food'! Their energy is now " + `${newPet.energy}`
  );
}

function petclean() {
  console.log("\nYou feed your pet an scooby snack!!!!!");
  newPet.feed();
  console.log("Your pet finished their scooby snack!!!");
  console.log(
    "Your pet gained 10 'food'! Their energy is now " + `${newPet.energy}`
  );
}

function quitmessage() {
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
