const FieldWithSelectionCompositeDriverFactory = component => {
  const inputWrappers = component.$('[data-hook="input-wrappers"]');

  return {
    getLabel: () => component.find('label'),
    getInput: () => inputWrappers.all(by.xpath('./div')).first(),
    getSelection: () => inputWrappers.all(by.xpath('./div')).last(),
    element: () => component,
  };
};

export default FieldWithSelectionCompositeDriverFactory;
