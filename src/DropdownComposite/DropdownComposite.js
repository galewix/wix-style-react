import React from 'react';
import {bool, node} from 'prop-types';
import {children, optional, once} from '../Composite';
import Label from '../Label';
import Dropdown from '../Dropdown';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

import deprecationLog from '../utils/deprecationLog';

deprecationLog(`Using "DropdownComposite" is deprecated. Please use "FormField".`);

const DropdownComposite = ({children, ...props}) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

DropdownComposite.propTypes = {
  children: children(optional(Label), once(Dropdown)),
  required: bool,
  appendToParent: bool,
  info: node,
  tooltip: node
};

DropdownComposite.displayName = 'DropdownComposite';

export default DropdownComposite;
