
// JQUERY
​
// Jquery is basically a giant function, with other functions inside of it
// Jquery() = $();
// Selecting an element
  $(".cards");
// Create an element
$("<div>Card</div>");
​
// JQuery functions
// Assigning a CSS property
$(".example").css("background-color", "red");
// Getting a css property
const backgroundColor = $(".example").css("background-color");
// Assigning a CSS property using another CSS property
$(".example").css("background-color", $(".example").css("background-color"));
​
$(".example").attr("src", "https://i.imgur.com/Rnj7kZj.jpg");
​
$(".example").html("<h1>This is Text</h1>");
​
// the "this" selector lets you select the element you're originating from. Useful in click handlers
console.log($(this));
​
// Buttons always need a Click Handler, and to assign that click handler
// Click Handler (a function)
function exampleButtonClickHandler() {
  console.log("Test");
  // $(this) when used in click handlers gives you the exact button that was clicked
  $(this).css("background-color", "red");
}
​
// Assigning a Click Handler using jquery
$(".exampleButton").click(exampleButtonClickHandler);