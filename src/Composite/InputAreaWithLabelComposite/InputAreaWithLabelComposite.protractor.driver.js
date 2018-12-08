const InputAreaWithLabelCompositeDriverFactory = component => ({
  getLabel: () => component.find('label'),
  element: () => component,
});

export default InputAreaWithLabelCompositeDriverFactory;
