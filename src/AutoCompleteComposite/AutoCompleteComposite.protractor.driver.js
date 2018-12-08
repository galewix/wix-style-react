import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.protractor.driver';

const autoCompleteCompositeDriverFactory = component =>
  inputAreaWithLabelCompositeDriverFactory(component);

export default autoCompleteCompositeDriverFactory;
