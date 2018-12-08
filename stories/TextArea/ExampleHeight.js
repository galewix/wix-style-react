import React from 'react';

import { Layout, Cell } from 'wix-style-react/Layout';

import FormField from 'wix-style-react/FormField';
import InputArea from 'wix-style-react/InputArea';

const defaultProps = {
  placeholder: 'Placeholder Text',
};

const Example = () => (
  <Layout>
    <Cell span="4">
      <FormField label="Fixed Height (3 rows)">
        <InputArea {...defaultProps} rows={3} />
      </FormField>
    </Cell>
    <Cell span="4">
      <FormField label="Min/Max Height (in px)">
        <InputArea {...defaultProps} minHeight={100} maxHeight={200} />
      </FormField>
    </Cell>
    <Cell span="4">
      <FormField label="Resizable">
        <InputArea {...defaultProps} resizable />
      </FormField>
    </Cell>
  </Layout>
);

export default Example;
