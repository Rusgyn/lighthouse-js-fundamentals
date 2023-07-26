// // Practice declaring and calling functions

const sayHello = function(name) {
  console.log("Hello, " + name);
}
sayHello('Dean');
sayHello('Miranda');
sayHello('Gaby');


// return and console.log

//console.log
const sayHelloToConsole = function(name){
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

//return
const returnSayHello = function(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('James');
console.log(greeting);
