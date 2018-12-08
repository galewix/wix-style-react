import inputDriverFactory from '../Input/Input.driver';

const rangeDriverFactory = ({ element, wrapper }) => {
  const label = element.childNodes[0];
  const input = element.childNodes[1];
  return {
    ...inputDriverFactory({ element, wrapper }),
    getInput: () => input,
    hasInput: () => input.childNodes[0].tagName.toLowerCase() === 'input',
    getLabel: () => label,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
  };
};

export default rangeDriverFactory;
