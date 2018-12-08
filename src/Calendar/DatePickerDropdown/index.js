import React from 'react';
import PropTypes from 'prop-types';

import DropdownLayout from '../../DropdownLayout';
import Text from '../../Text';
import ChevronDown from '../../new-icons/ChevronDown';
import styles from './styles.scss';

export default class DropdownPicker extends React.Component {
  static propTypes = {
    dataHook: PropTypes.string,
    caption: PropTypes.node,
    options: PropTypes.array,
    onChange: PropTypes.func,
    selectedId: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.stopAllEventsThatCanOpenModalInSameEventLoop = false;
    this.state = {
      isOpen: false,
    };
  }

  onClose = () => {
    this.setState({
      isOpen: false,
    });
    this.stopAllEventsThatCanOpenModalInSameEventLoop = true;
    setTimeout(() => {
      // for next event loop we allow them
      this.stopAllEventsThatCanOpenModalInSameEventLoop = false;
    });
  };

  onSelect = data => {
    this.props.onChange(data);
    this.onClose();
  };

  toggleDropdown = () => {
    if (!this.stopAllEventsThatCanOpenModalInSameEventLoop) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  };

  render() {
    const { caption, options, dataHook, selectedId } = this.props;

    const { isOpen } = this.state;

    return (
      <div data-hook={dataHook} className={styles.root}>
        <div className={styles.button} onClick={this.toggleDropdown}>
          <Text dataHook={`${dataHook}-button`}>{caption}</Text>
          <div className={styles.icon}>
            <ChevronDown />
          </div>
        </div>

        {isOpen && (
          <div className={styles.dropdown}>
            <DropdownLayout
              dataHook={`${dataHook}-menu`}
              focusOnSelectedOption
              visible={isOpen}
              options={options}
              onSelect={this.onSelect}
              onClickOutside={this.onClose}
              closeOnSelect
              selectedId={selectedId}
            />
          </div>
        )}
      </div>
    );
  }
}
