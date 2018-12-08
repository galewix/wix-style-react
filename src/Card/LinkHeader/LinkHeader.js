import React from 'react';
import { node, string } from 'prop-types';
import TextLink from '../../TextLink';
import WixComponent from '../../BaseComponents/WixComponent';
import Header from '../Header';
import deprecationLog from '../../utils/deprecationLog';

class LinkHeader extends WixComponent {
  static displayName = 'Card.LinkHeader';

  componentDidMount() {
    deprecationLog(
      'Card.LinkHeader is deprecated, please use <Card.Header suffix={<TextLink/>}/> instead.',
    );
  }

  static propTypes = {
    ...Header.propTypes,
    linkTitle: string.isRequired,
    linkTo: string.isRequired,
    tooltip: node,
    dataHook: string,
  };

  static defaultProps = {
    tooltip: null,
  };

  render() {
    const {
      title,
      subtitle,
      linkTitle,
      linkTo,
      withoutDivider,
      tooltip,
      dataHook,
    } = this.props;

    const linkElement = (
      <div>
        <TextLink dataHook="link" link={linkTo} children={linkTitle} />
      </div>
    );

    const tooltipElement = tooltip
      ? React.cloneElement(tooltip, {}, linkElement)
      : null;

    return (
      <Header
        dataHook={dataHook}
        title={title}
        subtitle={subtitle}
        suffix={tooltipElement ? tooltipElement : linkElement}
        withoutDivider={withoutDivider}
      />
    );
  }
}

export default LinkHeader;
