import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pick from '../../../utils/operators/pick';

import withTooltip from '../withTooltip';
import * as TabPropTypes from '../constants/tab-prop-types';
import styles from '../../Tabs.scss';

class TabItem extends React.Component {
  getItemStyle() {
    const { type, width, itemMaxWidth } = this.props;

    return (
      {
        uniformSide: { width },
        compactSide: itemMaxWidth ? { maxWidth: `${itemMaxWidth}pt` } : {},
      }[type] || {}
    );
  }

  render() {
    const {
      item,
      onItemClick,
      isActive,
      initHasTooltip,
      dynamicProperties,
    } = this.props;

    const containerProps = {
      key: item.id,
      onClick: () => onItemClick(item),
      className: classNames(styles.tab, { [styles.active]: isActive }),
      style: this.getItemStyle(),
      ...pick(this.props, dynamicProperties),
    };

    return (
      <li {...containerProps} data-hook={item.dataHook}>
        <span ref={el => initHasTooltip(el)}>{item.title}</span>
      </li>
    );
  }
}

TabItem.propTypes = {
  itemMaxWidth: PropTypes.number,
  isActive: PropTypes.bool,
  item: TabPropTypes.item.isRequired,
  onItemClick: TabPropTypes.onClick,
  type: TabPropTypes.type,
  width: TabPropTypes.width,
  initHasTooltip: PropTypes.func.isRequired,
  dynamicProperties: PropTypes.array,
};

export default withTooltip(TabItem);
