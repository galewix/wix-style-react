# InputArea component

> General inputArea container.

## InputArea TestKit API


### Enzyme / ReactTestUtils
| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| focus | - | - | focus the element |
| enterText | string | - | applied text to the element |
| getValue | - | string | get the element default text |
| getName | - | string | get the native textarea's name attribute |
| getType | - | string | get the native textarea's type attribute |
| getDefaultValue | - | string | get the element text |
| getRowsCount | - | number | get the max number of rows (define the height of the element) |
| getMaxLength | - | number | get max number of characters |
| getResizable | - | boolean | true if the element is resizable (only height) |
| getHasCounter | - | boolean | true if the element has a counter (works with maxLength) |
| getCounterValue | - | string | return counter value |
| hasExclamation | - | boolean | true if exclamation is present |
| getPlaceholder | - | string | get the placeholder text |
| getReadOnly | - | boolean | true if the element is read only |
| getAriaLabel | - | string | get the element aria-label |
| getAriaControls | - | string | get the element aria-controls |
| getAriaDescribedby | - | string | get the element aria-describedby |
| hasError | - | boolean | true if the element present an error |
| isFocusedStyle | - | boolean | true if the element is always focused |
| isHoveredStyle | - | boolean | true if the element is always hovered |
| getTooltipDataHook | - | string | get the element tooltip datahook | 
| getTooltipElement | - | element | get the tooltip element |
| setProps | json | element | returns a clone of this element with the new props from the json | 

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {inputAreaTestkitFactory} from 'wix-style-react/dist/testkit';
  import {inputAreaTestkitFactory as enzymeInputAreaTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><InputArea value="my text value" dataHook={dataHook}/></div>);
  const testkit = enzymeInputAreaTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.getValue()).toBe('my text value');

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><InputArea value="my text value" dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = inputAreaTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.getValue()).toBe('my text value');
```
