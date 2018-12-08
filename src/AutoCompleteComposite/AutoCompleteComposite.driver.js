import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const autoCompleteDriverFactory = ({ element, wrapper }) => {
  const input = element.querySelector('input');

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element, wrapper }),
    hasAutoComplete: () => !!input,
  };
};

export default autoCompleteDriverFactory;
