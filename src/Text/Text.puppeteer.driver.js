const textDriverFactory = async (component, page) => {
  return {
    element: () => component,
    getValue: () => page.evaluate(_input => _input.innerHTML, component),
  };
};
export default textDriverFactory;
