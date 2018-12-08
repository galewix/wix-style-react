const buttonDriverFactory = (component, page) => ({
  click: () => component.click(),
  getButtonTextContent: () =>
    page.evaluate(_component => _component.innerText, component),
  element: () => component,
});

export default buttonDriverFactory;
