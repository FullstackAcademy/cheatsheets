# CSS

CSS or "Cascading Style Sheets" are how we can customize the style of our HTML elements.

The basic idea is to first select the item or items you want to modify, and then apply properties to them to change their style

### Example using psuedocode (fake code):

```
cssSelectors {
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

1. HTML Element Selector
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

## Descendent Selectors

Children are the elements one level down from an element.

```
<div>
  <h1>I'm a child!</h1>
</div>
```

Descendents are the elements one or more levels down from an element.

```
<div>
  <span>
    <h1>I'm a descendent!</h1>
  </span>
</div>
```

You can chain css selectors in order to increase the specificity and select descendants. If there are two competing rules, the more specific one will always apply. There are 2 main ones you'll use:

1. Child elements:
   1. Selected using a greater than symbol `>` between the css selectors. The first selector will be the parent, then the second the child. It will select all children that are selected with that selector.
   ```
   div > p {
     <!-- This will select all p tags with a div parent -->
   }
   ```
2. Descendant elements:
   1. Selected using a space `" "` between the css selectors. The first selector is the parent, and the second is a descendant any number of layers below.
   ```
    div p {
      <!-- This will select all p tags that have some sort of parent grandparent that is a div -->
    }
   ```

There's ton more selectors besides these, check them out here: https://www.w3schools.com/cssref/css_selectors.asp
