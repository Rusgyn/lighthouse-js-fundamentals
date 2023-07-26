//isEven Function

const isEven = function(num){
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//----------------------------------------------

// modify to practice more.
const even = function(num){
  if (num % 2 === 0) {
    return "The " + num + " is even!";
  } else {
    return "The " + num + " is not a whole number and not even."
  }
}

// it will print "ho" as per the declared number.
const laugh = function(times){
  var sound = "";
  for (var i = 0; i < times; i++) {
    sound = sound + "ho";
  }
  sound = sound + "!";
  return sound;
}
const tenEven = even(10);
const elevenEven = even(11);
const reaction = laugh(5);

console.log((tenEven) + " I got it " + (reaction));
console.log((elevenEven) + " I got it " + (reaction));