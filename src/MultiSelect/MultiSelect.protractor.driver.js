import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.protractor.driver';

const multiSelectDriverFactory = component => ({
  ...inputWithOptionsDriverFactory(component),
  addTag: async () => {
    await component.click();
    await component.$('[data-hook^="dropdown-item"]:first-of-type').click();
  },
  element: () => component,
  getHeight: () => {
    return component.getSize().then(size => {
      return size.height;
    });
  },
  getWidth: () => {
    return component.getSize().then(size => {
      return size.width;
    });
  },
});

export default multiSelectDriverFactory;
