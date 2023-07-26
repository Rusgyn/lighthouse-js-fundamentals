/* We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/

var x = 99;

while (x <= 200/* your stop condition goes here */) {
  if ( ((x/3) && (x/4)) && ((x % 3 === 0) && (x % 4 === 0)) ) {
    console.log("LoopyLighthouse")
  } else if ((x/4) && (x % 4 === 0)) {
    console.log("Lighthouse");
  } else if ((x/3) && (x % 3 === 0)) {
    console.log("Loopy");
  } else {
    console.log();
  }
  x = x + 1;  
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
}