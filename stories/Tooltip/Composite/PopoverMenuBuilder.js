import React from 'react';
import PropTypes from 'prop-types';
import IconChooser from '../../Button/IconChooser';
import Input from 'wix-style-react/Input';
import Checkbox from 'wix-style-react/Checkbox';
import { Button } from 'wix-style-react/Backoffice';

class PopoverMenuBuilder extends React.Component {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
    addRow: PropTypes.func.isRequired,
    updateRowIcon: PropTypes.func.isRequired,
    updateRowText: PropTypes.func.isRequired,
    updateRowDisabled: PropTypes.func.isRequired,
  };

  render() {
    const rows = this.props.menuItems.map((menuItem, i) => (
      <div key={i} style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ width: '30%', marginRight: '6px' }}>
          <IconChooser
            selectedId={menuItem.iconName}
            onSelect={opt => this.props.updateRowIcon(opt.id, i)}
          />
        </div>
        <div style={{ width: '40%', marginRight: '6px' }}>
          <Input
            value={menuItem.text}
            placeholder="Text for menu item"
            onChange={event => this.props.updateRowText(event.target.value, i)}
          />
        </div>
        <div style={{ width: '20%' }}>
          <Checkbox
            checked={menuItem.disabled}
            onChange={() => this.props.updateRowDisabled(!menuItem.disabled, i)}
          >
            Disabled
          </Checkbox>
        </div>
      </div>
    ));

    return (
      <div style={{ width: '100%' }}>
        {rows}
        <Button type="button" onClick={this.props.addRow}>
          Add Row
        </Button>
      </div>
    );
  }
}

export default PopoverMenuBuilder;
