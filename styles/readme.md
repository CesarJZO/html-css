# CSS

- [Syntax](#syntax)
- [Display](#display)
- [Units](#units)
    - [Relative Units](#relative-units)
    - [Absolute Units](#absolute-units)
- [Flexbox](#flexbox)

## Syntax

```css
selector {
    property: value;
}
```

## Display

The difference between `inline` and `block` elements is that `inline` elements do not start on a new line. They only take up as much width as necessary. And `block` elements start on a new line and take up the full width available.

## Units

Units are used to specify the size of elements. There are two types of units: *relative* and *absolute*.

### Relative Units

- `em` - Relative to the font-size of the element (2em means 2 times the size of the current font)
- `ch` - Relative to width of the "0" (zero) glyph
- `ex` - Relative to the x-height of the current font (rarely used)
- `cap` - Relative to the cap height (the nominal height of capital letters) of the current font (rarely used)
- `ic` - Relative to the height of the element's containing block
- `lh` - Relative to the line-height of the element
- `r...` - Relative to the root element
    - `rem` - Relative to the font-size of the root element
    - `rlh` - Relative to the line-height of the root element
- `v...` - Relative to the viewport's height or width
    - `vh` - Relative to 1% of the height of the viewport
    - `vw` - Relative to 1% of the width of the viewport
    - `vi` - Relative to 1% of the size of the initial containing block

### Absolute Units

- `cm` - Centimeters
- `mm` - Millimeters
- `Q` - Quarter-millimeters
- `in` - Inches (1in = 96px = 2.54cm)
- `pc` - Picas (1pc = 12pt = 1/6in)
- `pt` - Points (1pt = 1/72nd of 1in)
- `px` - Pixels (1px = 1/96th of 1in)

## Flexbox

Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. Flexbox is a single-direction layout concept. Think of flexbox as a way to lay out items in a single dimension either as a row or a column.

### Properties

- `display: flex;` - Defines a flex container
- `flex-direction: row | row-reverse | column | column-reverse;` - Defines the direction of the main axis
- `flex-wrap: nowrap | wrap | wrap-reverse;` - Defines whether the flex items are forced in a single line or can be flowed into multiple lines
- `flex-flow: <flex-direction> || <flex-wrap>;` - A shorthand property for the `flex-direction` and `flex-wrap` properties
- `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;` - Defines the alignment along the main axis
- `flex-grow: <number>;` - Defines how much the flex item will grow relative to the rest of the flex items
    - By default, all flex items have a `flex-grow` value of `0`
- `flex-shrink: <number>;` - Defines how the flex item will shrink relative to the rest of the flex items
    - By default, all flex items have a `flex-shrink` value of `1`
- `flex-basis: <length> | auto;` - Defines the initial length of a flex item
    - By default, all flex items have a `flex-basis` value of `auto`

