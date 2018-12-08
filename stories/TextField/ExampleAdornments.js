import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Cell } from 'wix-style-react/Layout';
import Input from 'wix-style-react/Input';
import FormField from 'wix-style-react/FormField';

const defaultProps = {
  placeholder: 'Search term',
};

const Example = () => (
  <Layout>
    <Cell>
      <Layout>
        <Cell span="4">
          <FormField label="[Status: Loading] + tooltip">
            <Input
              {...defaultProps}
              status={'loading'}
              statusMessage="I am a message"
            />
            <br />
          </FormField>
        </Cell>
        <Cell span="4">
          <FormField label="[Status: Error] + tooltip">
            <Input
              {...defaultProps}
              status={'error'}
              statusMessage="I am a message"
            />
            <br />
          </FormField>
        </Cell>
      </Layout>
    </Cell>
    <Cell>
      <Layout>
        <Cell span="4">
          <FormField label="Unit">
            <Input {...defaultProps} unit="$" />
            <br />
          </FormField>
        </Cell>
        <Cell span="4">
          <FormField label="Unit + [Status: Error]">
            <Input {...defaultProps} unit="$" status={'error'} />
            <br />
          </FormField>
        </Cell>
      </Layout>
    </Cell>
    <Cell>
      <Layout>
        <Cell span="4">
          <FormField label="Help + tooltip">
            <Input {...defaultProps} help helpMessage="I am a message" />
            <br />
          </FormField>
        </Cell>
      </Layout>
    </Cell>
  </Layout>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
