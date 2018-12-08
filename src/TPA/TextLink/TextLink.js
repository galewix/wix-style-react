import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../../BaseComponents/WixComponent';
import tpaStyleInjector from '../TpaStyleInjector';

let styles = { locals: {} };
try {
  styles = require('!css-loader?modules&camelCase&localIdentName="[path][name]__[local]__[hash:base64:5]"!sass-loader!./TextLink.scss');
} catch (e) {}

class TextLink extends WixComponent {
  static propTypes = {
    link: string.isRequired,
    id: string,
    children: string,
  };

  static defaultProps = {
    disabled: false,
    rel: null,
    target: null,
  };

  getLinkProps = () => {
    /* eslint-disable no-unused-vars */
    const {
      children,
      className,
      link,
      href,
      dataHook,
      injectedStyles,
      ...linkProps
    } = this.props;
    return linkProps;
  };

  render() {
    const { children, className, link } = this.props;
    const { locals } = styles;
    const classes = classNames(
      [locals['wix-style-react-text-link']],
      className,
    ).trim();
    const linkProps = this.getLinkProps();

    return (
      <a className={classes} href={link} {...linkProps}>
        {children}
      </a>
    );
  }
}

TextLink.displayName = 'TextLink';

export default tpaStyleInjector(TextLink, styles);
