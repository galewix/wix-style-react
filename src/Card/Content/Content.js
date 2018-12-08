import React, { Component } from 'react';
import { node } from 'prop-types';
import styles from './Content.scss';

class Content extends Component {
  static propTypes = {
    children: node,
  };

  _getChildName = children =>
    children.type && (children.type.displayName || children.type.name);

  render() {
    const { children } = this.props;

    return (
      <div
        className={
          this._getChildName(children) === 'EmptyState'
            ? styles.emptyStateContent
            : styles.root
        }
      >
        {children}
      </div>
    );
  }
}

export default Content;
