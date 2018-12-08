import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.protractor.driver';

const textFieldDriverFactory = component => ({
  ...inputAreaWithLabelCompositeDriverFactory(component),
  getInput: () => component.find('input'),
});

export default textFieldDriverFactory;
