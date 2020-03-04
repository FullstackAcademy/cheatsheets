// JAVASCRIPT
// Variables
// declare a variable using one equals sign =
// let can be reassigned
let item1 = 5;
// const cannot be reassigned
const item = "String";
const bestDog = "Jackson";
​
// Functions
// Named Functions
function dogs(i) {
  if (i === "Jackson") {
    console.log("Best Dog");
  } else {
    console.log("My Dog is Named " + i);
  }
}
​
// Calling a function using a variable
dogs(bestDog);
​
// Calling a function using a value
dogs("Fido");
dogs("Skip");
dogs("Lenny");
​
// Anonymous Functions
(function() {})();
​
// Arrow Function. All these different ways of declaring functions work interchangably
() => {};
​
// For loops
// for (setting the variable; condition to run until; incrimentor)
for (let i = 0; i < 5; i++){
	console.log("Looped " + i + " times")
}