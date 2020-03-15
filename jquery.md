# JQuery

query is basically a giant function, with other functions inside of it

Jquery() === \$();

All Jquery functions are called by first using the Jquery selector, `$()`, then using a `.` to call a function based on what was selected.

## Jquery Selector

You can either select an existing html element using css selector syntax

```
$("div > .card")
```

Or create a whole new element that you can do functions on (remember to save this to a variable or append it, or else it's lost). You do this by putting the actual `< >` tags in there.

```
const newCard = $("<div><div class='card'>Hello!</div></div>")
```

Or use the `this` keyword, this mainly only works in `click handlers` and `event handlers` to let you know which element was clicked on. This works exactly the same as `event.target` in those cases.

```
$("button").click(()=>{
    $(this).css("background-color", "red")
})
```

## Jquery Functions

Functions are called by adding a `.` plus the function `name` and `()` with the parameters inside.

- .click(function)

  - Also known as setting a click handler, the passed function will be called when you click on the selected item.
  - Example using anonymous functions
    ```
    $("button.action").click(()={
        console.log("Button Clicked!")
    })
    ```
  - Example using a named function (pass in just the name)

    ```
    function buttonClicked(){
        console.log("Button Clicked!")
    }

    $("button.action").click(buttonClicked)
    ```

- .append(\$("child-element"))
  - Appends the child to the parent
    ```
    $(".card").append($("<h1>My name is Jeff</h1>"))
    ```
- .appendTo(\$("parent-element"))
  - Appends the child to the parent, using the child as the top selector
    ```
    $("<h1>My name is Jeff</h1>").appendTo($(".card"))
    ```
- .css("css-attribute","new-value")
  - Sets the css attribute of the selected item to a new value
    ```
    $(".card").css("background-color", "blue")
    ```
- .css("css-attribute")
  - Gives you the current value of the selected elements attribute
    ```
    const cardBackgroundColor = $(".card").css("background-color")
    ```
- .data("dataname", dataValue)

  - Sets some invisible javascript value onto an html element. Useful for retrieving later in click functions.

    ```
    const todo = {title: "Do dishes", date: "later"}

    $(this).data("todo", todo)
    ```

- .data("dataname")
  - Retrieves previously stored data from an element
    ```
    const myTodo = $(this).data("todo")
    ```

Theres tons of other ones, see them all here: https://oscarotero.com/jquery/
