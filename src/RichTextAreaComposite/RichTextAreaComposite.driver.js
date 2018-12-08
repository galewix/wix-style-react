import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const RichTextAreaCompositeDriverFactory = ({ element, wrapper }) => {
  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element, wrapper }),
  };
};

export default RichTextAreaCompositeDriverFactory;
