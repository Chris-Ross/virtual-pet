// Dependencies
const input = require('readline-sync');
const virtualPet = require('./virtual-pet');
// New instance of virtualPet
const newInstance = new virtualPet;
// \n is a linebreak command.
console.log('Hello!\nWelcome to Virtual Pet!!!');
const userResponse = input.question('Do you wana build a snowman?!\n');

