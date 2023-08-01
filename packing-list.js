const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

packingList.push("spoon"); // line added to practice more

console.log("Kitchen stuff to pack:");

console.log("We have a total of " + packingList.length + " items to pack."); // line added to practice more
console.log("From " + packingList[0] + " to " + packingList[8]); //line added to practice more

for (let i = 0; i < packingList.length; i++) {
   console.log(packingList[i]);
}