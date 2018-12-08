import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import MultiSelectComposite from './MultiSelectComposite';
import MultiSelect from '../MultiSelect';
import { multiSelectCompositeTestkitFactory } from '../../testkit';
import { multiSelectCompositeTestkitFactory as enzymeMultiSelectCompositeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('MultiSelectComposite', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <MultiSelectComposite dataHook={dataHook}>
              <MultiSelect />
            </MultiSelectComposite>
          </div>,
        ),
      );
      const multiSelectCompositeTestkit = multiSelectCompositeTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(multiSelectCompositeTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(
          <MultiSelectComposite dataHook={dataHook}>
            <MultiSelect />
          </MultiSelectComposite>,
        );
        const multiSelectCompositeTestkit = enzymeMultiSelectCompositeTestkitFactory(
          {
            wrapper,
            dataHook,
          },
        );
        expect(multiSelectCompositeTestkit.exists()).toBeTruthy();
      });
    });
  });
});
