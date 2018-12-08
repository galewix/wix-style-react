import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textFieldDriverFactory = ({ element, wrapper }) => {
  const input = element.querySelector('input.input');

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element, wrapper }),
    getInput: () => input,
    hasInput: () => !!input,
  };
};

export default textFieldDriverFactory;
