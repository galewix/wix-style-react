import React from 'react';

import FormField from 'wix-style-react/FormField';
import InputArea from 'wix-style-react/InputArea';

export default class BasicExample extends React.Component {
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
        <InputArea
          placeholder="Placeholder Text"
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
      </FormField>
    );
  }
}
