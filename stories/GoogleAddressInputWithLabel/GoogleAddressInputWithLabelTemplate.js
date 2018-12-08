import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';

import GoogleAddressInputWithLabel from '../../src/GoogleAddressInputWithLabel';
import GoogleAddressInput from '../../src/GoogleAddressInput';
import Label from '../../src/Label';

export default class Form extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    withLabel: PropTypes.bool,
    label: PropTypes.object,
    input: PropTypes.object,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <GoogleAddressInputWithLabel>
        {this.props.withLabel ? (
          <Label for="address" {...this.props.label} />
        ) : null}
        <GoogleAddressInput
          countryCode="US"
          id="address"
          {...this.props.input}
        />
      </GoogleAddressInputWithLabel>
    );
  }

  render() {
    return this.getComponent();
  }
}
