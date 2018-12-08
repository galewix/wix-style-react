const RangeInputWithLabelCompositeDriverFactory = component => ({
  getLabel: () => component.find('label'),
  element: () => component,
});

export default RangeInputWithLabelCompositeDriverFactory;
