import rangeWithLabelCompositeDriverFactory from '../Composite/RangeInputWithLabelComposite/RangeInputWithLabelComposite.protractor.driver';

const rangeDriverFactory = component => {
  return {
    ...rangeWithLabelCompositeDriverFactory(component),
  };
};

export default rangeDriverFactory;
