# `<NumberInput/>` Specification

## Description

This is a controlled NumberInput component, with increase, decrease buttons.
It supports integer values only.

![image](./readme-assets/number-input.png)

## Basic Usage

```js
import React from 'react';
import NumberInput from 'wix-style-react/NumberInput';

class ProductQuantity extends React.Component {
  state = {quantity: 1}

  render() {
    return (
      <NumberInput
        value={this.state.quantity}
        onChange={(value) => this.setState({quantity: value})}
        maxValue={100}
      />
    )
  }
}
```

## `<NumberInput/>` Props

| propName     | propType | defaultValue | isRequired | description |
| ---          | ---      | ---          | ---        | ---         |
| value        | number   |              | Yes        | counter value |
| onChange     | func     |              | Yes        | A callback when the value changes. Signature (value) => void |
| minValue     | number   | 0            |            | manimum counter value (inclusive)|
| maxValue     | number   | 100          |            | maximum counter value (inclusive)|
| step         | number   | 1            |            | increase/decrease step |
| inputProps   | object   |              |            | Object with HTML attributes to be placed onto the native `<input/>`

## Behavior

- Clicking on increase button increases value by `step` prop
- Clicking on decrease button decrease value by `step` prop
- When `maxValue` is reached, the further clicking on increase/decrease buttons will not trigger the `onChange` callback.

## Style API

### Selectors (pseudo-elements)

| selector          | description                        | type | children pseudo-states |
|:------------------|:-----------------------------------|:-----|:-----------------------|
| root       | Allows styling the size, background and border  |      |                        |
| ::increaseButton  |                                    |      |                        |
| ::decreaseButton  |                                    |      |                        |
| ::input           | targets the input area             |     |                        |

### States

| state        | description                        | type |
|:-------------|:-----------------------------------|:-----|
| disabled     | Input and buttons are disabled     | boolean    |
| active       | true when one of the buttons is active (pressed down)  | boolean    |

### Style Code Example

```css
:import {
  -st-from: './components/number-input';
  -st-default: NumberInput;
}

.root {

}
.quantity {
  -st-extends: NumberInput;

  width: 200px;
  border: 1px solid black;
}
.quantity:disabled {
  border: 1px solid grey;
}
.quantity::increaseButton, .quantity::decreaseButton {
  background-color: green;
}


```

## Accessibility & Keyboard Navigation

### Keyboard Navigation

- Tab order: `input` is the only focusable element
- Pressing up/down arrows increases/decreases the value by `step`
- Pressing right/left arrows increases/decreases the value by `step`

### Accessibility

- increase/decrease buttons should have appropriate aria-label

## RTL Support

- increase/decrease buttons layout should be switch in RTL mode.
- right/left arrows are switched as well.

## Rational (optional)

Here you can optionaly describe important rational of API decissions.