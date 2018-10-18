import React from 'react';

import FormField from 'wix-style-react/FormField';
import Dropdown from 'wix-style-react/Dropdown';

export default () => (
  <FormField label="This is the FormField label">
    <Dropdown
      placeholder="Select dominant hand"
      options={[{id: 0, value: 'Left'}, {id: 1, value: 'Right'}, {id: 2, value: 'Ambidextrous'}]}
      />
  </FormField>
);

