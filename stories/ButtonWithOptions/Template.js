import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Close from 'wix-style-react/new-icons/X';
import { ButtonWithOptions } from '../../src/index';

export class Form extends Component {
  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    let iconSize = '6px';
    if (this.props.height === 'large') {
      iconSize = '8px';
    }
    if (
      ['close-standard', 'close-dark', 'close-transparent'].indexOf(
        this.props.theme,
      ) < 0
    ) {
      iconSize = '12px';
    }

    const icons = {};
    if (this.props.prefixIcon) {
      icons.prefixIcon = this.props.prefixIcon;
    }

    if (this.props.suffixIcon) {
      icons.suffixIcon = this.props.suffixIcon;
    }

    return (
      <ButtonWithOptions {...this.props}>
        <ButtonWithOptions.Button {...this.props} {...icons}>
          {this.props.iconOnly ? <Close size={iconSize} /> : this.props.text}
        </ButtonWithOptions.Button>
        <ButtonWithOptions.Option id="1">Option 1</ButtonWithOptions.Option>
        <ButtonWithOptions.Option id="2">Option 2</ButtonWithOptions.Option>
        <ButtonWithOptions.Option id="3" disabled>
          Option 3
        </ButtonWithOptions.Option>
        <ButtonWithOptions.Option id="4">
          <span>
            <Close size={iconSize} /> Option 4
          </span>
        </ButtonWithOptions.Option>
        <ButtonWithOptions.Option id="5">Option 5</ButtonWithOptions.Option>
      </ButtonWithOptions>
    );
  }

  render() {
    return this.getComponent();
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  iconOnly: PropTypes.bool,
  text: PropTypes.string,
  height: PropTypes.string,
  prefixIcon: PropTypes.node,
  suffixIcon: PropTypes.node,
  dropdownTheme: PropTypes.string,
  withArrow: PropTypes.bool,
};

export default Form;
