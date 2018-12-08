import React from 'react';
import { children, optional, once } from '../Composite';
import Label from '../Label';
import InputArea from '../InputArea';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

import deprecationLog from '../utils/deprecationLog';

deprecationLog(
  `Using "TextArea" is deprecated. Please see "3.2a Text Area" updated documentation for a composite usage of "FormField" and "TextInput".`,
);

const TextArea = ({ children, ...props }) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

TextArea.propTypes = {
  children: children(optional(Label), once(InputArea)),
};

TextArea.displayName = 'TextArea';

export default TextArea;
