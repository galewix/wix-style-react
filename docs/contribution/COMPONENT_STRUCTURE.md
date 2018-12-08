# Component structure
The following structure is the basic structure for a component.

## Component Specific Files
```
wix-style-react
|
|__src
|  |__ComponentName
|  |    index.js                              # entry file for the component
|  |    ComponentName.js                      # the actual component
|  |    ComponentName.scss                    # the component stylesheet
|  |    ComponentName.spec.js                 # component tests
|  |    ComponentName.driver.js               # vanilla js public driver to abstract common actions
|  |    COMPONENT-SPEC.md                     # Component specification
|  |    ComponentName.e2e.js                  # browser testing
|  |    ComponentName.protractor.driver.js    # protractor public driver to abstract common actions
|  |    README.md                             # (optional) additional information of the component
|  |    README.TESTKIT.md                     # documention for the different driver methods
|__stories
|  |__ComponentName
|  |    index.story.js                        # entry file for all component documentation
```


### index.js
1. Every component should have an index file  exporting the default entry for easy importing.

### ComponentName.js
1. The actual component. A component can be either a simple standalone component or composition of other components.
1. Read the [Component Guidelines section](./COMPONENT_GUIDELINES.md) for more information.

### ComponentName.scss
1. Almost every component will have a styling sheet.
1. Read the [Styling section](./STYLING.md) for more information.

### ComponentName.spec.js
1. Testing component behavior and methods wiring.
1. Read the [Tests section](./TESTING.md) for more information.

### ComponentName.driver.js
1. Every component exposes a public driver abstraction over common interactions. It is used also in the component tests in order to verify it works.
1. Read the [Test Drivers section](./TEST_DRIVERS.md) for more information.

### ComponentName.e2e.js
1. Actual browser tests for the component.
1. Read the [Tests section](./TESTING.md) for more information.

### ComponentName.protractor.driver.js
1. Same as the `ComponentName.driver.js` only with protractor syntax.
1. Read the [Test Drivers section](./TEST_DRIVERS.md) for more information.

### index.story.js
1. The documentation of every component. It uses the `.story` convention in order to apply automated documentation tool.
1. Read the [Component Documentation section](./DOCUMENTING_COMPONENTS.md) for more information.

### COMPONENT-SPEC.md

This documents purpose is for planning the implementation of a new component.
It is not a place for documentation (for consumers).
Component specification, may include:

- Reference to UX spec
- Props API definitions
- Styling API definitions
- Detailed behavior definitions
- Implementation details

See this [COMPONENT-SPEC-TEMPLATE](./COMPONENT-SPEC-EXAMPLE.md)

## Component Essentials
Each component has also an "entry" in a few common files.
```
wix-style-react
|
|__.storybook
|  |__stories.js      # loads all stories 
|__testkit
|  |__index.js        # all vanila drivers
|  |__enzyme.js       # all enzyme drivers
|  |__protractor.js   # all protractor drivers 
|  |__puppeteer.js    # all puppeteer drivers
```

When adding a new component, you need to also add an entry in each of these files.
