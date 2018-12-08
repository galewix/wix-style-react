import React from 'react';
import {
  arrayOf,
  func,
  oneOf,
  oneOfType,
  node,
  number,
  shape,
  string,
  any,
  bool,
} from 'prop-types';
import styles from './Breadcrumbs.scss';
import classnames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';
import Text from '../Text';
import BreadcrumbsPathFactory from './BreadcrumbsPathFactory';
import BreadcrumbsChevronRight from 'wix-ui-icons-common/system/BreadcrumbsChevronRight';

/**
 * a way to visualise current navigation path
 */
class Breadcrumbs extends WixComponent {
  static displayName = 'Breadcrumbs';

  static propTypes = {
    /**
     * * __id__ - Specifies the item id
     * * __link__ - Optional link to be called on click
     * * __value__ - Value to be shown on breadcrumb
     * * __disabled__ - if this value is disabled
     * * __customElement__ - A custom item which will be rendered
     */
    items: arrayOf(
      shape({
        id: oneOfType([string, number]).isRequired,
        value: node.isRequired,
        link: string,
        customElement: any,
        disabled: bool,
      }),
    ).isRequired,
    onClick: func,
    activeId: oneOfType([string, number]),
    size: oneOf(['medium', 'large']),
    theme: oneOf(['onWhiteBackground', 'onGrayBackground', 'onDarkBackground']),
  };

  static defaultProps = {
    size: 'medium',
    theme: 'onGrayBackground',
  };

  handleBreadcrumbClick = item =>
    this.props.onClick && this.props.onClick(item);

  getValueAppearance(isActive) {
    const { theme, size } = this.props;

    const isDarkBackground = theme === 'onDarkBackground';
    const isSmallSize = size === 'medium';

    return {
      weight: isActive ? 'normal' : 'thin',
      light: isDarkBackground,
      size: isSmallSize ? 'small' : 'medium',
    };
  }

  createItem({ item, isActive, onClick }) {
    const breadcrumbValue = value => (
      <Text dataHook="breadcrumbs-item" {...this.getValueAppearance(isActive)}>
        {value}
      </Text>
    );

    const defaultBreadcrumb = () => (
      <button
        type="button"
        data-hook="breadcrumb-clickable"
        className={classnames(styles.item, styles.button, {
          [styles.disabled]: item.disabled,
          [styles.active]: isActive,
        })}
        onClick={onClick}
        children={breadcrumbValue(item.value)}
      />
    );

    const linkBreadcrumb = () => (
      <a
        href={item.link}
        data-hook="breadcrumb-clickable"
        className={classnames(styles.item, styles.link, {
          [styles.disabled]: item.disabled,
          [styles.active]: isActive,
        })}
        onClick={onClick}
        children={breadcrumbValue(item.value)}
      />
    );

    const customBreadcrumb = () => (
      <span
        data-hook="breadcrumb-clickable"
        className={styles.item}
        onClick={onClick}
        children={breadcrumbValue(item.customElement)}
      />
    );

    if (isActive) {
      return defaultBreadcrumb();
    } else if (item.customElement) {
      return customBreadcrumb();
    } else if (item.link) {
      return linkBreadcrumb();
    } else {
      return defaultBreadcrumb();
    }
  }

  renderItem(item, activeId, isDividerVisible) {
    const isActive = activeId === item.id;

    return (
      <div
        key={item.id}
        className={classnames(styles.itemContainer, {
          [styles.active]: isActive,
        })}
      >
        {this.createItem({
          item,
          isActive,
          onClick: () =>
            item.disabled !== true && this.handleBreadcrumbClick(item),
        })}
        {isDividerVisible && (
          <BreadcrumbsChevronRight className={styles.divider} />
        )}
      </div>
    );
  }

  render() {
    const { items, size, theme, activeId } = this.props;

    return (
      <div className={classnames(styles[size], styles[theme])}>
        {items.map((item, i, allItems) =>
          this.renderItem(item, activeId, allItems[i + 1]),
        )}
      </div>
    );
  }
}

export const breadcrumbsPathFactory = BreadcrumbsPathFactory;
export default Breadcrumbs;
