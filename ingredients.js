//Create a JavaScript file that prints out our ingredients.

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;

console.log("Using while loop, the Banana bread ingredients are: ");
while (i < ingredients.length) {
   console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("\nUsing for loop, the Banana Bread ingredients are: ")
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("\nUsing the while loop, the Banana Bread ingredients in backward list are: ");

let b = ingredients.length - 1;
while (b >= 0) {
  console.log(ingredients[b]);
  b--;
}

/* using the for loop, the Banana Bread ingredients in backward list are:

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
} */
