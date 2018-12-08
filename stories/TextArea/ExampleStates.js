import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Cell } from 'wix-style-react/Layout';
import InputArea from 'wix-style-react/InputArea';
import FormField from 'wix-style-react/FormField';

const defaultProps = {
  placeholder: 'Placeholder Text',
};

const Example = () => (
  <Layout>
    <Cell span="4">
      <FormField label="Error">
        <InputArea {...defaultProps} error />
      </FormField>
    </Cell>
    <Cell span="4">
      <FormField label="Disabled">
        <InputArea {...defaultProps} readOnly />
      </FormField>
    </Cell>
  </Layout>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
