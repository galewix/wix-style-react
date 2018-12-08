import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.protractor.driver';

const textAreaDriverFactory = component => ({
  ...inputAreaWithLabelCompositeDriverFactory(component),
  getInputArea: () => component.find('textarea'),
});

export default textAreaDriverFactory;
