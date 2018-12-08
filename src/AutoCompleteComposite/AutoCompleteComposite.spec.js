import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import AutoCompleteComposite from './AutoCompleteComposite';
import AutoComplete from '../AutoComplete/AutoComplete';
import { autoCompleteCompositeTestkitFactory } from '../../testkit';
import { autoCompleteCompositeTestkitFactory as enzymeTextAreaTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('AutoCompleteComposite', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <AutoCompleteComposite dataHook={dataHook}>
              <AutoComplete />
            </AutoCompleteComposite>
          </div>,
        ),
      );
      const autoCompleteCompositeTestkit = autoCompleteCompositeTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(autoCompleteCompositeTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(
          <AutoCompleteComposite dataHook={dataHook}>
            <AutoComplete />
          </AutoCompleteComposite>,
        );
        const autoCompleteCompositeTestkit = enzymeTextAreaTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(autoCompleteCompositeTestkit.exists()).toBeTruthy();
      });
    });
  });
});
