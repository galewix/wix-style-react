import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import styles from './RichTextArea.scss';

const richTextAreaDriverFactory = ({ element, wrapper, component }) => {
  const getButtons = () => [
    ...element.querySelectorAll('[data-hook*="rich-text-area-button"]'),
  ];
  const getEditorWrapper = () =>
    element.querySelector('[data-hook=editor-wrapper]');
  const getButtonType = button =>
    button.getAttribute('data-hook').replace(/^rich-text-area-button-/, '');
  const getImage = () => element.querySelector('[data-hook=editor-image]');
  const getButtonByType = type =>
    getButtons().find(button => getButtonType(button) === type);
  const clickButtonByType = type => () =>
    ReactTestUtils.Simulate.mouseDown(getButtonByType(type));
  const getDefaultBlock = () =>
    element.querySelector("[data-key='defaultBlock']");

  return {
    exists: () => !!element,
    getButtonTypes: () => getButtons().map(getButtonType),
    clickBoldButton: clickButtonByType('bold'),
    clickItalicButton: clickButtonByType('italic'),
    clickUnderlineButton: clickButtonByType('underline'),
    clickImageButton: clickButtonByType('image'),
    clickUnorderedListButton: clickButtonByType('unordered-list'),
    clickOrderedListButton: clickButtonByType('ordered-list'),
    getContent: () => element.childNodes[1].textContent,
    enterText: text => {
      const props = { value: text, isAppend: true };
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },
    isErrorIndicatorVisible: () =>
      Boolean(element.classList.contains(styles.withError)),
    isDisabled: () =>
      getButtons().every(button =>
        button.classList.contains(styles.disabled),
      ) && element.childNodes[1].classList.contains(styles.disabled),
    isImageExist: () => !!getImage(),
    isAddImageButtonExist: () => !!getButtonByType('image'),
    isResizable: () => getEditorWrapper().classList.contains(styles.resizable),
    isDefaultBlockExist: () => getDefaultBlock(),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },
  };
};

export default richTextAreaDriverFactory;
