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

//---------------------------------------------

//return
const returnSayHello = function(name) {
  return "Hello, " + name;
}
// add additional variable to practice

const today = function(hi) {
  return "\n" + "Hi " + hi + ". How are you?. I am glad to finally meet you!"
}

const greeting = returnSayHello('James');
const glad = today('Gaby');
console.log((greeting) + (glad)); 

/* RESULT: Hello, James
Hi Gaby. How are you?. I am glad to finally meet you!*/
