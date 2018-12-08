import React from 'react';
import { any, oneOf, string } from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../../BaseComponents/WixComponent';
import tpaStyleInjector from '../TpaStyleInjector';

let styles = { locals: {} };
try {
  styles = require('!css-loader?modules&camelCase&localIdentName="[path][name]__[local]__[hash:base64:5]"!sass-loader!./Button.scss');
} catch (e) {}

class Button extends WixComponent {
  static propTypes = {
    theme: oneOf(['fill', 'outline']),
    children: any,
    id: string,
  };

  static defaultProps = {
    theme: 'fill',
  };

  getButtonProps = () => {
    /* eslint-disable no-unused-vars */
    const {
      injectedStyles,
      children,
      theme,
      className,
      dataHook,
      ...buttonProps
    } = this.props;
    return buttonProps;
  };

  render() {
    const { children, theme, className } = this.props;
    const { locals } = styles;
    const classes = classNames(
      [
        [locals['wix-style-react-button']],
        [locals[`wix-style-react-button-${theme}`]],
      ],
      className,
    ).trim();

    const buttonProps = this.getButtonProps();

    return (
      <button className={classes} data-theme={theme} {...buttonProps}>
        {children}
      </button>
    );
  }
}

Button.displayName = 'Button';

export default tpaStyleInjector(Button, styles);
