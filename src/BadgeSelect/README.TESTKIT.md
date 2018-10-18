# `<BadgeSelect/>` component

## Enzyme / ReactTestUtils TestKit API

| Method | Arguments | Returned value | Description |
|--------|-----------|----------------|-------------|
| `exists` | - | `boolean` | Returns 'true' wether the element exists |
| `clickAtOption` | `index` | - | Click on an option |

### Example usage

```javascript
import React from 'react';
import {badgeSelectTestkitFactory} from 'wix-style-react/dist/testkit';

// ...

const driver = badgeSelectTestkitFactory({wrapper, dataHook});
driver.clickBadge();

// ...
```

## Protractor TestKit API

| Method | Arguments | Returned value | Description |
|--------|-----------|----------------|-------------|
| `element` | - | `element` | Returns the element |
| `clickBadge` | - | - | Click the badge |
| `selectOption` | `index` | - | Select a specific option |
