import React from 'react';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';

export default class TextFieldBasicExample extends React.Component {
  state = {
    value: '',
  };

  render() {
    return (
      <FormField
        label="This is the FormField label"
        required
        infoContent="This is the info tooltip content"
      >
        <Input
          placeholder="Placeholder Text"
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
      </FormField>
    );
  }
}
