const addImageDriverFactory = component => ({
  click: () => component.click(),
  element: () => component,
});

export default addImageDriverFactory;
