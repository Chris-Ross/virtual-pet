// Dependencies
const input = require("readline-sync");
const virtualPet = require("./virtual-pet");
const chalk = require("chalk");
const blueText = chalk.blue;
// New instance of virtualPet
const newInstance = new virtualPet(50, 50, 50);
// \n is a linebreak command.
// Welcome message and first interactive options.
console.log("Hello!\nWelcome to Virtual Pet!!!");
const userResponse = input.question(
  "How would you like to interact with your pet?\n" +
    `Enter "1" for ${blueText("Feed")}\n` +
    `Enter "2" for ${blueText("Play")}\n` +
    `Enter "3" for ${blueText("Bathe")}\n` +
    `Enter "4" for ${blueText("Quit")}\n`
);
