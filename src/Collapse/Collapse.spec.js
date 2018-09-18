import React from 'react';
import {mount} from 'enzyme';

import Collapse from './';

describe('Collapse', () => {
  it('should render children', () => {
    const wrapper = mount(<Collapse children="hello"/>);
    expect(wrapper.text()).toEqual('hello');
  });

  describe('`open` prop', () => {
    it('should not render children when false', () => {
      const wrapper = mount(<Collapse open={false} children="hello"/>);
      expect(wrapper.children().text()).toEqual(null);
    });
  });
});
