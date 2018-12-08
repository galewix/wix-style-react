import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.protractor.driver';
import multiSelectDriverFactory from '../MultiSelect/MultiSelect.protractor.driver';

const multiSelectCompositeDriverFactory = component => {
  const multiSelect = component.all(by.xpath('./div')).last();

  return {
    ...inputAreaWithLabelCompositeDriverFactory(component),
    ...multiSelectDriverFactory(multiSelect),
  };
};

export default multiSelectCompositeDriverFactory;
