const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;



console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}



const choice2 = readline.question("What do you do next? 'Keep wandering' or 'make camp'?")
const hasDog = false; // has doggy companion
const hasDysentery = true; // doomed to die

if (choice2 === "Keep wandering" && hasDysentery) {
  console.log("You die of dysentary");
}else if(choice2 === "Keep wandering" && !hasDysentery) {
  console.log("You find a Yeti creature and it eats you.");
}else if(choice2 === 'make camp' && hasDog) {
  console.log("You found your long lost doggy!");
}else  {
  console.log("You found your long lost dog, dead in the wilderness.");
}



