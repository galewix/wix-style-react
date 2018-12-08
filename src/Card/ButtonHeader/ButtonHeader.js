import React from 'react';
import { func, node, oneOf, string } from 'prop-types';

import Button from '../../Backoffice/Button';
import WixComponent from '../../BaseComponents/WixComponent';
import Header from '../Header';
import deprecationLog from '../../utils/deprecationLog';

const buttonThemes = {
  standard: 'whiteblueprimary',
  emptyblue: 'emptyblue',
  fullblue: 'fullblue',
};

class ButtonHeader extends WixComponent {
  static displayName = 'ButtonHeader';

  componentDidMount() {
    deprecationLog(
      'Card.ButtonHeader is deprecated, please use <Card.Header suffix={<Button/>}/> instead.',
    );
  }

  static propTypes = {
    ...Header.propTypes,
    title: node.isRequired,
    buttonTitle: string.isRequired,
    buttonOnClick: func.isRequired,
    buttonPrefix: node,
    buttonSuffix: node,
    tooltip: node,
    theme: oneOf(['standard', 'fullblue', 'emptyblue']),
    dataHook: string,
  };

  static defaultProps = {
    subtitle: null,
    withoutDivider: false,
    buttonPrefix: null,
    tooltip: null,
    theme: 'standard',
    buttonSuffix: null,
  };

  render() {
    const {
      title,
      subtitle,
      buttonOnClick,
      buttonTitle,
      buttonPrefix,
      buttonSuffix,
      withoutDivider,
      tooltip,
      theme,
      dataHook,
    } = this.props;

    const buttonElement = (
      <div>
        <Button
          dataHook="button"
          height={theme === 'standard' ? 'medium' : 'small'}
          suffixIcon={buttonSuffix}
          prefixIcon={buttonPrefix}
          onClick={buttonOnClick}
          theme={buttonThemes[theme] || buttonThemes.standard}
          children={buttonTitle}
        />
      </div>
    );

    const tooltipElement = tooltip
      ? React.cloneElement(tooltip, { children: buttonElement })
      : null;

    return (
      <Header
        title={title}
        subtitle={subtitle}
        suffix={tooltipElement || buttonElement}
        withoutDivider={withoutDivider}
        dataHook={dataHook}
      />
    );
  }
}

export default ButtonHeader;
