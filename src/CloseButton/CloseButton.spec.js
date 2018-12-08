import React from 'react';
import CloseButton from '.';
import { mount } from 'enzyme';

describe('CloseButton', () => {
  it('should have correct displayName', async () => {
    expect(CloseButton.displayName).toEqual('CloseButton');
  });

  describe('Icon', () => {
    it('when given small or none should have size <Close/>', () => {
      const wrapper = mount(<CloseButton size="small" />);
      expect(wrapper.find('[data-hook="close"]').exists()).toBeTruthy();
    });

    it('when given medium should have size <CloseLarge />', () => {
      const wrapper = mount(<CloseButton size="medium" />);
      expect(wrapper.find('[data-hook="close-large"]').exists()).toBeTruthy();
    });
  });
});
