import React from 'react';
import PropTypes from 'prop-types';
import { DragDropManager } from 'dnd-core';
import HTML5Backend from './HTML5Backend';

let defaultManager;
function getDefaultManager(backend) {
  if (!defaultManager) {
    defaultManager = new DragDropManager(backend);
  }
  return defaultManager;
}

// https://github.com/react-dnd/react-dnd/issues/186#issuecomment-110333064
class DragDropContextProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    backend: PropTypes.func,
  };
  static defaultProps = {
    backend: HTML5Backend,
  };
  static contextTypes = {
    dragDropManager: PropTypes.object,
  };

  static childContextTypes = {
    dragDropManager: PropTypes.object,
  };

  getChildContext() {
    // we add `manager` to instance to allow to manipulate d&d in tests
    this.getManager = () =>
      this.context.dragDropManager || getDefaultManager(this.props.backend);

    return {
      dragDropManager: this.getManager(),
    };
  }

  render() {
    return this.props.children;
  }
}

export default DragDropContextProvider;
