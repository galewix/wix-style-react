import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textAreaDriverFactory = ({ element, wrapper }) => {
  const inputArea = element.childNodes[1];
  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element, wrapper }),
    getInputArea: () => inputArea,
    hasInputArea: () =>
      inputArea.childNodes[0].childNodes[0].tagName.toLowerCase() ===
      'textarea',
  };
};

export default textAreaDriverFactory;
