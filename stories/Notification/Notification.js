import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Notification from '../../src/Notification';

export default class Form extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    notification: PropTypes.object,
    withActionButton: PropTypes.bool,
    actionButton: PropTypes.object,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getCtaButton() {
    const props = {};
    if (this.props.actionButton.type === 'textLink') {
      props.link = this.props.actionButton.link;
    }
    return (
      <Notification.ActionButton {...props} type={this.props.actionButton.type}>
        {this.props.actionButton.text}
      </Notification.ActionButton>
    );
  }

  getComponent() {
    const notificationProps = Object.assign({}, this.props.notification);

    return (
      <Notification {...notificationProps}>
        <Notification.TextLabel>
          Boo! I scared you with this very scary error message!
        </Notification.TextLabel>
        {this.props.actionButton.type !== 'none' ? this.getCtaButton() : null}
        <Notification.CloseButton />
      </Notification>
    );
  }

  render() {
    return this.getComponent();
  }
}
