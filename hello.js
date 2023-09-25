// tinkering: Declaring and calling functions

const sayHello = function (name) { // function sayHello with parameter name
  console.log("Hello, " + name + "!");
};

sayHello("Gabby");
sayHello("Dean");
sayHello("Aury");

/* OUTPUT:
Hello, Gabby!
Hello, Dean!
Hello, Aury!
*/

// difference between return and console.log

const sayHelloToConsole = function (name) {
   console.log("Hello, " + name);
};
sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, " + name + "!";
};
const greeting = returnSayHello("John");
console.log(greeting);

// Practice:

const returnPracticeHello = function (nameFirst) {
  return "Hello, " + nameFirst + "! How are you today?";
};
const firstGreeting = returnPracticeHello("Dean Aurelius");

const returnPracticeHi = function (nameSecond) {
  return "\nHi, " + nameSecond + ". I am doing well, and I hope you are too!";
};
const secondGreeting = returnPracticeHi("Gabrielle");

console.log(firstGreeting + secondGreeting);

/* OUTPUT:
Hello, Dean Aurelius! How are you today?
Hi, Gabrielle. I am doing well, and I hope you are too!
*/