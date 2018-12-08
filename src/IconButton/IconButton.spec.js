import React from 'react';
import IconButton from './IconButton';
import Add from 'wix-ui-icons-common/Add';
import { shallow } from 'enzyme';

describe('IconButton', () => {
  it('should have correct displayName', () => {
    expect(IconButton.displayName).toEqual('IconButton');
  });

  describe('Icon size', () => {
    const dataHook = 'children-icon';
    const selector = `[data-hook="${dataHook}"]`;

    it('should have size 24px', () => {
      const wrapper = shallow(
        <IconButton>
          <Add data-hook={dataHook} />
        </IconButton>,
      );
      expect(wrapper.find(selector).props().size).toEqual('24px');
    });

    it('given size small should have size 18px', () => {
      const wrapper = shallow(
        <IconButton size="small">
          <Add data-hook={dataHook} />
        </IconButton>,
      );
      expect(wrapper.find(selector).props().size).toEqual('18px');
    });
  });
});
