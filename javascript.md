# JavaScript

## Variables

- Variables are basically holders of values.
- There are three main types of variable keywords: `const, let, var`
- You declare (aka "create") a variable using that keyword, followed by the name you want to give that variable
  - `let hungry;`
- You assign (aka "give a value to") a variable using a equals sign `=`
  - `let hungry = true`

1. `const`
   1. `const`, or "constant variables", can be assigned once and never be reassigned.
   2. It's good practice to use a `const` any time you know you won't be overriding something - that way your code doesn't accidentally override it down the line.

```
const bestPerson = "Timmy";

bestPerson = "Rob" ;
// ^ that fails
```

2. `let`
   1. `let` variables can be reassigned (aka 'overriding'), and are scoped to block that are they are declared in, meaning if you assign them inside of a for loop, they can't be accessed outside of the function.
   2. In general we always use `let` when we have something we want to reassign.

```
let bestAnimal = "dogs";
bestAnimal = "cats";
// ^ that works
```

3. `var`
   1. `var` variables can also be reassigned, but can accessed outside of any non-function scope block they are declared in. (Boo, error prone)
   2. `var` can also be redeclared at any point, while with let's it would cause an error. (Boo, error prone)
   3. In general we avoid using `var` because it can lead to bad practices and messy code.

```
if(user === "admin"){
    var pwd = "hunter2";
}

console.log(pwd);
//^ this works

var pwd = "hunter3";
//^ this also works
```

## What the heck is Scope

Scope determines where you can use functions or variables.

If you declare your variables outside of any sort of function or expression, they are given `global scope`, meaning they can be accessed in any function. If you declare your variables inside of a function, they are given `function scope`, meaning they can only be accessed inside of that function.

Smaller levels of scope can also be created using code blocks like `for` loops, `if` statements, and generally anytime you see `{ }`, aka curly brackets. That is why we like to use `let` instead of var, or else we could have tons of floating variables able to be accessed outside of where they are intended.

```
for(var i = 0; i < 5; i++){
    console.log("Hi")
}

console.log(i)
//^ this works

for(let k = 0; k < 5; k++){
    console.log("Hi")
}

console.log(k)
//^ this doesn't work
```

## Values

The values of variables have `types`, this is important for differentiating between things like numbers and letters.

### Primitive (aka simple) values

1. `number`
   1. You know, like 1, 7, 52
   2. `const bestNumber = 3;`
2. `string`
   1. Basically a collection of letters, like `"My name is Rob"`
   2. Use quotes `" "` when assigning it
   3. `let myName = "Rob";`
3. `boolean`
   1. Can be `true` or `false` and that's it.
   2. `let friends = true`
4. `undefined`
   1. This is what every variables is BEFORE it gets assigned a value.
   2. Super important to remember in case you ever see "Blah blah is undefined" errors, means that something was never given a value
   3. `let myName;`
5. `null`
   1. Essentially "empty", assign a variable to this if you don't want it to equal anything.
   2. `let friends = null;`
6. `BigInt`
   1. Big numbers
7. `Symbol`
   1. Very rare, basically a unique identifier, don't worry about it

### Complex values

8. `Objects`
   1. Can hold other variables and values. The variable names inside are called `keys`, and the values are called `values` - you'll often hear the phrase `key/value pairs` referring to this.
   2. Declared using curly braces `{ }`
   ```
   let student = {
       name: "Rob",
       coolness: true
   }
   ```
9. `Functions`
   1. Functions can be values, this allows you to pass functions around. More on that later when we talk about functions.
10. `Arrays`
    1. Basically a list. TECHNICALLY arrays are objects, but they look completely different.
    2. Declared using square brackets `[ ]`
    3. `let bestFriends = ["Timmy", "Johnny", "Eric"]`
    4. If you want to get a certain item back from an array, then use it's name plus a number inside of square brackets.
    5. `console.log(bestFriends[1])` gives us `Johnny`
    6. Johnny?? But I passed in the number 1!
    7. Well, arrays start counting at 0. `console.log(bestFriends[0])` gives us `Timmy`.

## Expressions

Values can also be assigned using expressions:

`let seven = 3 + 4` 7

`let threefour = "three" + "four"` "threefour"

`let numberTester = 5 < 6` true

## Functions

Lets you execute code, and takes in `parameters` to customize what happens

```
function functionName(parameter1, parameter2, parameter3){
    console.log("Hello" + parameter1 + parameter2 + parameter3)
}
```

You can declare functions in several ways:

1. Named Functions
   1. Used for when you'll need to call the function again somewhere else
   2. Created using the keyword `function`, then the name you want to give it, then a parenthesis pair `()`, then a curly brace pair `{}`
   3. Parameters go in the `()`, code you want to execute goes in the `{}`
   4. Code isn't immediately executed, instead you have to "call" the function, using the name and `()` with any parameters inside

```
function generateName(name){
    console.log("Your name is " + name)
}

generateName("Bob");
```

2. Anonymous Functions
   1. A lot of the time you'll want define functions only to be used once. This is the case for a lot of jquery or array functions that are expecting functions as parameters. It gets confusing creating so many named functions with only singular purposes, so you can just create functions in-line using anonymous functions.
   2. Syntax (aka the accepted way of writing code) 1: `function(){}`
   3. Syntax 2: `()=>{}` (this is known as an arrow, bigarrow, or lambda function)
   4. Both syntaxes work the same, where they execute the code inside the blocks IMMEDIATELY

```
$("div").click(()=>{
    console.log("div clicked!")
})
```

## For loops

Lets you loop through things

Syntax `for (setting the variable; condition to run until; incrimentor)`

```
for (let i = 0; i < 5; i++){
	console.log("Looped " + i + " times")
}
```

## If / else if / else

Let's you execute code based on a condition. Ifs can be used on their own, without else or else if.

Syntax:

```
if(condition){

} else if (condition2) {

} else {

}
```

Example:

```
let number = 7;
```
