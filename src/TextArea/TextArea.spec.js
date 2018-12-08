import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TextArea from './TextArea';
import InputArea from '../InputArea';
import { textAreaTestkitFactory } from '../../testkit';
import { textAreaTestkitFactory as enzymeTextAreaTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('TextArea', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <TextArea dataHook={dataHook}>
              <InputArea />
            </TextArea>
          </div>,
        ),
      );
      const textAreaTestkit = textAreaTestkitFactory({ wrapper, dataHook });
      expect(textAreaTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(
          <TextArea dataHook={dataHook}>
            <InputArea />
          </TextArea>,
        );
        const textAreaTestkit = enzymeTextAreaTestkitFactory({
          wrapper,
          dataHook,
        });
        expect(textAreaTestkit.exists()).toBeTruthy();
      });
    });
  });
});
