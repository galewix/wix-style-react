import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import Loader from '../Loader';
import styles from './Input.scss';

class InputLoaderSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        dataHook="input-tooltip"
        disabled={this.props.tooltipMessage.length === 0}
        placement={this.props.tooltipPlacement}
        alignment="center"
        textAlign="left"
        content={this.props.tooltipMessage}
        overlay=""
        theme="dark"
        maxWidth="230px"
        hideDelay={150}
        zIndex={10000}
      >
        <div className={styles.loaderContainer}>
          <Loader size={'tiny'} />
        </div>
      </Tooltip>
    );
  }
}

InputLoaderSuffix.propTypes = {
  tooltipMessage: PropTypes.string.isRequired,
  tooltipPlacement: PropTypes.string,
};

export default InputLoaderSuffix;
