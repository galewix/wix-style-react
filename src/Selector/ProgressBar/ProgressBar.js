import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import s from './ProgressBar.scss';
import Heading from '../../Heading';

class ProgressBar extends WixComponent {
  static propTypes = {
    progress: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className={s['progress-bar']}>
        <Heading appearance="H6">{`${this.props.progress}%`}</Heading>
        <span className={s.bar}>
          <span
            className={s['bar-value']}
            style={{ width: this.props.progress + '%' }}
          />
          <span
            className={s['bar-leftover']}
            style={{ width: 100 - this.props.progress + '%' }}
          />
        </span>
      </div>
    );
  }
}

export default ProgressBar;
