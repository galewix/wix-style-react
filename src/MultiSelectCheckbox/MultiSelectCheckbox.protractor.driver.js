import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.protractor.driver';

const multiSelectCheckboxDriverFactory = component => ({
  ...inputWithOptionsDriverFactory(component),
  clickInput() {
    component.click();
  },
});

export default multiSelectCheckboxDriverFactory;
