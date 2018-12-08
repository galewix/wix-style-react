import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import DropdownComposite from './DropdownComposite';
import Dropdown from '../Dropdown';
import { dropdownCompositeTestkitFactory } from '../../testkit';
import { dropdownCompositeTestkitFactory as enzymeDropdownCompositeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('DropdownComposite', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <DropdownComposite dataHook={dataHook}>
              <Dropdown />
            </DropdownComposite>
          </div>,
        ),
      );
      const dropdownCompositeTestkit = dropdownCompositeTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(dropdownCompositeTestkit.exists()).toBeTruthy();
    });

    it('should show option length', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const someOptions = [
        { id: 0, value: 'Option 1' },
        { id: 1, value: 'Option 2' },
      ];
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <DropdownComposite dataHook={dataHook}>
              <Dropdown options={someOptions} />
            </DropdownComposite>
          </div>,
        ),
      );
      const dropdownCompositeTestkit = dropdownCompositeTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(
        dropdownCompositeTestkit.dropdownLayoutDriver.optionsLength(),
      ).toEqual(someOptions.length);
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(
          <DropdownComposite dataHook={dataHook}>
            <Dropdown />
          </DropdownComposite>,
        );
        const dropdownCompositeTestkit = enzymeDropdownCompositeTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(dropdownCompositeTestkit.exists()).toBeTruthy();
      });

      it('should show option length', () => {
        const dataHook = 'myDataHook';
        const someOptions = [
          { id: 0, value: 'Option 1' },
          { id: 1, value: 'Option 2' },
        ];
        const wrapper = mount(
          <DropdownComposite dataHook={dataHook}>
            <Dropdown options={someOptions} />
          </DropdownComposite>,
        );
        const dropdownCompositeTestkit = enzymeDropdownCompositeTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(
          dropdownCompositeTestkit.dropdownLayoutDriver.optionsLength(),
        ).toEqual(someOptions.length);
      });
    });
  });
});
