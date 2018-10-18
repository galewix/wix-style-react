import React from 'react';
import DropdownLayout from '../DropdownLayout';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {badgeSelectItemBuilder} from '../BadgeSelectItemBuilder';
import styles from './BadgeSelect.scss';
import Badge, {SKIN, TYPE, SIZE} from '../Badge/Badge';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import ReactDOM from 'react-dom';

export default class BadgeSelect extends React.Component {

  static propTypes = {
    /** An array of options. Each option must have a unique `id`, a `text` and a `skin` whose value should match one of `<Badge/>`'s skin values */
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      skin: PropTypes.oneOf(Object.keys(SKIN)).isRequired,
      text: PropTypes.string.isRequired
    })),
    /** The id of the selected option in the list */
    selectedId: PropTypes.string,
    /** Callback function called whenever the user selects a different option in the list */
    onSelect: PropTypes.func,
    /** The size of the `<Badge/>` */
    size: PropTypes.oneOf(Object.keys(SIZE)),
    /** The type of the `<Badge/>` */
    type: PropTypes.oneOf(Object.keys(TYPE)),
    /** Whether the text of the `<Badge/>` should be uppercase */
    uppercase: PropTypes.bool,
    dataHook: PropTypes.string
  };

  static displayName = 'BadgeSelect';

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selectedBadge: this.getSelectedOption(props)
    };

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedId !== nextProps.selectedId) {
      this.setState({
        selectedBadge: this.getSelectedOption(nextProps)
      });
    }
  }

  /**
   * Determine if a certain key should open the DropdownLayout
   *
   * @param {KeyboardEvent.key} key - The key name
   * @return {boolean} - Whether the key should cause the DropdownLayout to open
   */
  _isOpenKey(key) {
    return ['Enter', 'Spacebar', ' ', 'ArrowDown'].includes(key);
  }

  getSelectedOption(props) {
    if (props.options && props.options.length) {
      return props.options.find(({id}) => id === props.selectedId) || props.options[0];
    }

    return null;
  }

  get options() {
    const {options} = this.props;
    return map(options, badgeSelectItemBuilder);
  }

  hideDropdown() {
    this.setState({visible: false});
  }

  showDropdown() {
    this.setState({visible: true});
  }

  toggleDropdown() {
    this.setState({visible: !this.state.visible});
  }

  handleOutsideClick(event) {
    const ref = ReactDOM.findDOMNode(this.badge);
    if (!ref.contains(event.target)) {
      this.setState({visible: false});
    }
  }

  handleSelect({id: selectedId}) {
    const {onSelect} = this.props;
    const selectedBadge = this.props.options.find(({id}) => id === selectedId);
    this.setState({selectedBadge, visible: false});

    onSelect && onSelect(selectedBadge);
  }

  onKeyDown(event) {
    // Delegate the event to the DropdownLayout. It'll handle the navigation,
    // option selection and closing of the dropdown.
    const isHandledByDropdownLayout = this.dropdownLayout._onKeyDown(event);

    // If the event wasn't handled by the DropdownLayout correctly, check if
    // the pressed key should open the dropdown and act accordingly.
    if (!isHandledByDropdownLayout) {
      if (this._isOpenKey(event.key)) {
        this.showDropdown();
        event.preventDefault();
      }
    }
  }

  render() {
    const {type, size, uppercase, dataHook} = this.props;

    return this.state.selectedBadge ? (
      <div className={styles.container} data-hook={dataHook}>
        <div data-hook="badgeSelect-badge-wrapper" onKeyDown={this.onKeyDown}>
          <Badge
            ref={badge => this.badge = badge}
            {...{type, size, uppercase}}
            suffixIcon={<ChevronDown/>}
            onClick={() => this.toggleDropdown()}
            skin={this.state.selectedBadge.skin}
            >
            {this.state.selectedBadge.text}
          </Badge>
        </div>
        <div className={styles.dropdown}>
          <DropdownLayout
            ref={r => this.dropdownLayout = r}
            dataHook="badgeSelect-dropdownLayout"
            visible={this.state.visible}
            selectedId={this.state.selectedBadge.id}
            options={this.options}
            onSelect={selected => this.handleSelect(selected)}
            onClose={() => this.hideDropdown()}
            onClickOutside={e => this.handleOutsideClick(e)}
            inContainer
            />
        </div>
      </div>
    ) : null;
  }
}
