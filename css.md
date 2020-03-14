# CSS

CSS or "Cascading Style Sheets" are how we can customize the style of our HTML elements.

The basic idea is to first select the item or items you want to modify, and then apply properties to them to change their style

### Example using psuedocode (fake code):

```
htmlElementSelector {
    property1: value1;
    property2: value2;
    property3: value3;
}
```

### Example using real code:

```
div {
  background-color: red;
  border-radius: 4px;
  color: black;
}
```

## CSS Selectors

The 3 main ones are as follows:

1. Element Selector
   1. Just type in the name of the element
```
p {
  color: orange;
}
```
2. Class Selector
   1. Use a `.` before the class name
```
.cool-div {
  background-color: cornflowerblue;
}
```
3. ID Selector
   1. Use a `#` before the id name
```
#submit-button {
  padding: 5px;
}
```


