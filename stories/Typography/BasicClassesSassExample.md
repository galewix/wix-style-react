<details>
<summary>Basic Example (Sass)</summary>

```js
import React from 'react';
import styles from './MyStyles.scss';

export default () => (
  <div>
    <h1 className={styles.myHeading}>This is my heading</h1>
    <span className={styles.myText}>
      This is a my text
    </span>
  </div>
);
```

> MyStyles.scss

```scss
@import 'node_modules/wix-style-react/dist/src/Typography/TypographyV5.scss';

.myHeading {
  @extend .h1;
  @extend .light;
}

.myText {
  @extend .text;
  @extend .sizeSmall;
}
```
</details>
