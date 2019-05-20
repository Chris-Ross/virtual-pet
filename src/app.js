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
    "How would you like to interact with your pet?\n" +
      `Enter "1" for ${blueText("Show pet stats")}\n` +
      `Enter "2" for ${blueText("Feed")}\n` +
      `Enter "3" for ${blueText("Play")}\n` +
      `Enter "4" for ${blueText("Bathe")}\n` +
      `Enter "5" for ${blueText("Quit")}\n`
  );
  if (userResponse === "1") {
    console.log(
      "energy is: " +
        `${newPet.energy}` +
        " entertainment is: " +
        `${newPet.entertainment}` +
        " hygene is: " +
        `${newPet.hygene}`
    );
  } else if (userResponse === "2") {
    console.log("You feed your pet an scooby snack!!!!!");
    newPet.feed();
    console.log("Your pet finished their scooby snack!!!");
    console.log(
      "Your pet gained 10 'food'! Their energy is now " + `${newPet.energy}`
    );
  } else if (userResponse === "3") {
    console.log("You play fetch with your pet!!!!");
    newPet.play();
    console.log("Your pet retrieved the ball!!");
    console.log(
      "Your pet gained 10 'joy'! Their entertainment is now " +
        `${newPet.entertainment}`
    );
  } else if (userResponse === "4") {
    console.log("You bathe your dirty pet!!!!");
    newPet.bathe();
    console.log("Your pet plays in the water while you wash it!!!!");
    console.log(
      "Your pet gained 10 'cleanliness'! Their hygene is now " +
        `${newPet.hygene}`
    );
  } else if (userResponse === "5") {
    quitCondition = false;
    console.log("Thanks for playing! Come back soon!");
  }
}
