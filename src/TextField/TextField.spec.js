import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TextField from './TextField';
import Input from '../Input';
import { textFieldTestkitFactory } from '../../testkit';
import { textFieldTestkitFactory as enzymeTextFieldTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('TextField', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <TextField dataHook={dataHook}>
              <Input />
            </TextField>
          </div>,
        ),
      );
      const textFieldTestkit = textFieldTestkitFactory({ wrapper, dataHook });
      expect(textFieldTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(
          <TextField dataHook={dataHook}>
            <Input />
          </TextField>,
        );
        const textFieldTestkit = enzymeTextFieldTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(textFieldTestkit.exists()).toBeTruthy();
      });
    });
  });
});
