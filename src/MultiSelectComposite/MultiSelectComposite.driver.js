import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';
import multiSelectDriverFactory from '../MultiSelect/MultiSelect.driver';

const multiSelectCompositeDriverFactory = ({ element, wrapper }) => {
  const multiSelect = element && Array.from(element.childNodes).slice(-1)[0];

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element, wrapper }),
    ...multiSelectDriverFactory({ element: multiSelect, wrapper: multiSelect }),
  };
};

export default multiSelectCompositeDriverFactory;
