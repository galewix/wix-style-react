import React from 'react';
import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';

export default () => (
  <FormField label="Tweet" dataHook="storybook-formfield-length-count">
    {({ setCharactersLeft }) => (
      <Input
        dataHook="storybook-formfield-length-count-input"
        onChange={event => setCharactersLeft(20 - event.target.value.length)}
      />
    )}
  </FormField>
);
