import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import RichTextAreaComposite from './RichTextAreaComposite';
import Label from '../Label';
import RichTextArea from '../RichTextArea';
import { richTextAreaCompositeTestkitFactory } from '../../testkit';
import { richTextAreaCompositeTestkitFactory as enzymeRichTextAreaCompositeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

const mockGetSelection = () => {
  const original = window.getSelection;
  const fn = () => ({});
  fn.restore = () => (window.getSelection = original);
  window.getSelection = fn;
};

describe('RichTextAreaComposite', () => {
  beforeEach(() => {
    mockGetSelection();
  });

  afterEach(() => {
    window.getSelection.restore();
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <RichTextAreaComposite dataHook={dataHook}>
              <Label>Label text</Label>
              <RichTextArea />
            </RichTextAreaComposite>
          </div>,
        ),
      );
      const richTextAreaCompositeTestkit = richTextAreaCompositeTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(richTextAreaCompositeTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'compHook';
        const wrapper = mount(
          <RichTextAreaComposite dataHook={dataHook}>
            <Label>Label text</Label>
            <RichTextArea />
          </RichTextAreaComposite>,
        );
        const richTextAreaCompositeTestkit = enzymeRichTextAreaCompositeTestkitFactory(
          { wrapper, dataHook },
        );
        expect(richTextAreaCompositeTestkit.exists()).toBeTruthy();
      });
    });
  });
});
