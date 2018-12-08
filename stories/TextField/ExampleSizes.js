import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Cell } from 'wix-style-react/Layout';
import Input from 'wix-style-react/Input';
import FormField from 'wix-style-react/FormField';

const defaultProps = {
  placeholder: 'They did not know it was impossible, so they did it!',
};

const Example = ({ theme }) => (
  <Layout>
    <Cell span="4">
      <FormField label="Small">
        <Input theme={theme} {...defaultProps} size="small" />
        <br />
      </FormField>
    </Cell>
    <Cell span="4">
      <FormField label="Normal">
        <Input theme={theme} {...defaultProps} size="normal" />
        <br />
      </FormField>
    </Cell>
    <Cell span="4">
      <FormField label="Large">
        <Input theme={theme} {...defaultProps} size="large" />
        <br />
      </FormField>
    </Cell>
  </Layout>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
