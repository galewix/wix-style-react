<h1 style="text-align: center;">
    <a href="https://wix.github.com/wix-style-react">
        <img src="https://raw.githubusercontent.com/wix/wix-style-react/master/.storybook/logo.svg?sanitize=true" alt="Wix Style React" width="300">
    </a>
</h1>

`wix-style-react` is a collection of [React](https://facebook.github.io/react/) components that conform to Wix Style created by Wix UX guild.

#### [Demo](https://wix-wix-style-react.surge.sh/) | [Source](https://github.com/wix/wix-style-react) | [Playground](https://codesandbox.io/s/7w8m804o5j)

## Setup

* Install with `npm` or `yarn`:
```sh
npm i wix-style-react
# OR
yarn add wix-style-react
```

* Use in your project:

```jsx
import React from 'react';
import Button from 'wix-style-react/Button';

const App = () => (
    <Button onClick={() => console.log('thanks for clicking :)')}>
      Click me!
    </Button>
);
```

## Requirements

* Load Wix fonts from CDN
    ```html
    <link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
    ```

## Tips

* Use [Yoshi](https://github.com/wix/yoshi) as build tool to avoid configuration. Otherwise follow [webpack setup instructions here](https://github.com/wix/wix-style-react/blob/master/docs/usage-without-yoshi.md)
* Enable font smoothing with browser specific css properties, for example:
    ```css
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ```
* Use [demo pages](https://wix-wix-style-react.surge.sh/) to find all available components with examples.

## Contributing
Please refer to the [Contributing page](https://github.com/wix/wix-style-react/blob/master/CONTRIBUTING.md)

## Tests
Please refer to the [Testing page](https://github.com/wix/wix-style-react/blob/master/docs/contribution/TESTING.md)

## License
This project is offered under [MIT License](https://github.com/wix/wix-style-react/blob/master/LICENSE).
