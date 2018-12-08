import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.protractor.driver';
import dropdownDriverFactory from '../Dropdown/Dropdown.protractor.driver';

const dropdownCompositeDriverFactory = component => {
  const dropdown = component.all(by.xpath('./div')).last();

  return {
    ...inputAreaWithLabelCompositeDriverFactory(component),
    ...dropdownDriverFactory(dropdown),
  };
};

export default dropdownCompositeDriverFactory;
