import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import multiSelectDriverFactory from './MultiSelect.driver';
import MultiSelect from './MultiSelect';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { multiSelectTestkitFactory } from '../../testkit';
import { multiSelectTestkitFactory as enzymeMultiSelectTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';
import { runInputWithOptionsTest } from '../InputWithOptions/InputWithOptions.spec';

runInputWithOptionsTest(multiSelectDriverFactory);

describe('MultiSelect', () => {
  const createDriver = createDriverFactory(multiSelectDriverFactory);
  const options = [
    { value: 'Alabama', id: 'Alabama', tag: { label: 'Alabama' } },
    { value: 'Alaska', id: 'Alaska' },
    { value: 'Arkansas', id: 'Arkansas', tag: { label: 'Arkansas' } },
    { value: 'Arkansas', id: 'Arkansas' },
    { value: 'California', id: 'California' },
    { value: 'California2', id: 'California2' },
    { value: 'California3', id: 'California3' },
    { value: 'California4', id: 'California4' },
    { value: 'California5', id: 'California5' },
    { value: 'California6', id: 'California6' },
    { value: 'California7', id: 'California7' },
    { value: 'Two words', id: 'Two words' },
  ];

  it('should NOT show dropdown when autofocus is on', () => {
    const { inputDriver, dropdownLayoutDriver } = createDriver(
      <MultiSelect options={options} autoFocus />,
    );
    expect(inputDriver.isFocus()).toBeTruthy();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should remove options that were selected and became tags', () => {
    const tags = [{ id: 'Alabama', label: 'Alabama' }];

    const { driver, dropdownLayoutDriver } = createDriver(
      <MultiSelect options={options} autoFocus />,
    );
    expect(dropdownLayoutDriver.optionsLength()).toBe(options.length);
    expect(dropdownLayoutDriver.isOptionExists('Alabama')).toBeTruthy();

    driver.setProps({ options, tags });
    expect(dropdownLayoutDriver.optionsLength()).toBe(
      options.length - tags.length,
    );
    expect(dropdownLayoutDriver.isOptionExists('Alabama')).toBeFalsy();
  });

  it('should not filter anything without predicate function', () => {
    const onSelect = jest.fn();
    const { driver, dropdownLayoutDriver } = createDriver(
      <MultiSelect options={options} onSelect={onSelect} />,
    );
    driver.focus();
    expect(dropdownLayoutDriver.optionsLength()).toBe(options.length);
  });

  it('should not lose Focus or close the list on selection with a mouse click', () => {
    const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
      <MultiSelect options={options} />,
    );
    driver.pressKey('ArrowDown');
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    expect(inputDriver.isFocus());
  });

  it('should not lose Focus or close the list on selection with enter press', () => {
    const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
      <MultiSelect options={options} />,
    );
    driver.focus();
    driver.pressKey('ArrowDown');
    driver.pressKey('Enter');
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    expect(inputDriver.isFocus()).toBeTruthy();
  });

  it('should not lose Focus or close the list on selection with tab press', () => {
    const onSelect = jest.fn();
    const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
      <MultiSelect options={options} onSelect={onSelect} />,
    );
    driver.pressKey('ArrowDown');
    driver.pressKey('ArrowDown');
    driver.pressKey('Tab');
    expect(onSelect).toBeCalledWith([
      { id: options[0].id, label: options[0].value },
    ]);
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    expect(inputDriver.isFocus()).toBeTruthy();
  });

  it('should not lose Focus or close the list on selection with comma press', () => {
    const onSelect = jest.fn();
    const onChange = jest.fn();
    const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
      <MultiSelect
        value={options[0].value}
        options={options}
        delimiters={[',']}
        onSelect={onSelect}
        onChange={onChange}
      />,
    );
    driver.pressKey('ArrowDown');
    inputDriver.trigger('keyDown', { key: ',' });
    expect(onSelect).toBeCalledWith([
      { id: options[0].id, label: options[0].value },
    ]);
    expect(onChange).toBeCalledWith({ target: { value: '' } });
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    expect(inputDriver.isFocus()).toBeTruthy();
  });

  describe('click-outside', () => {
    it('should call onSelect on click-outside if options empty', () => {
      const onSelect = jest.fn();
      const { driver } = createDriver(
        <MultiSelect value={'bob'} onSelect={onSelect} />,
      );
      driver.outsideClick();
      expect(onSelect).toBeCalledWith([{ id: 'bob', label: 'bob' }]);
    });

    it('should not call onSelect on click-outside if options is not empty', () => {
      const onSelect = jest.fn();
      const { driver } = createDriver(
        <MultiSelect value={'bob'} options={options} onSelect={onSelect} />,
      );
      driver.outsideClick();
      expect(onSelect.mock.calls).toHaveLength(0);
    });

    it('should not call onSelect on click-outside if input is empty', () => {
      const onSelect = jest.fn();
      const { driver } = createDriver(
        <MultiSelect value={''} onSelect={onSelect} />,
      );
      driver.outsideClick();
      expect(onSelect.mock.calls).toHaveLength(0);
    });

    it('should call onChange on click-outside if options is open', () => {
      const onChange = jest.fn();
      const { driver } = createDriver(
        <MultiSelect value={''} onChange={onChange} />,
      );
      driver.pressKey('ArrowDown');
      driver.outsideClick();
      expect(onChange.mock.calls).toHaveLength(1);
    });

    it('should not call onChange on click-outside if options is hidden', () => {
      const onChange = jest.fn();
      const { driver } = createDriver(
        <MultiSelect value={''} onChange={onChange} />,
      );
      driver.outsideClick();
      expect(onChange.mock.calls).toHaveLength(0);
    });
  });

  it('should support custom delimiters', () => {
    const onSelect = jest.fn();
    const onChange = jest.fn();
    const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
      <MultiSelect
        value={options[0].value}
        options={options}
        delimiters={[';']}
        onSelect={onSelect}
        onChange={onChange}
      />,
    );
    driver.pressKey('ArrowDown');
    inputDriver.trigger('keyDown', { key: ';' });
    expect(onSelect).toBeCalledWith([
      { id: options[0].id, label: options[0].value },
    ]);
    expect(onChange).toBeCalledWith({ target: { value: '' } });
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    expect(inputDriver.isFocus()).toBeTruthy();
  });

  it('should display a placeholder if there are no tags', () => {
    const placeholder = 'myPlaceholder';
    const { inputDriver } = createDriver(
      <MultiSelect options={options} placeholder={placeholder} />,
    );
    expect(inputDriver.getPlaceholder()).toBe(placeholder);
  });

  it('should render readonly input on select mode', () => {
    const { inputDriver } = createDriver(
      <MultiSelect options={options} mode="select" />,
    );
    expect(inputDriver.getReadOnly()).toBeTruthy();
  });

  it('should render arrow on select mode', () => {
    const { inputDriver } = createDriver(
      <MultiSelect options={options} mode="select" />,
    );
    expect(inputDriver.hasMenuArrow()).toBeTruthy();
  });

  it('should render input wrapper with error', () => {
    const { driver } = createDriver(<MultiSelect error options={options} />);
    expect(driver.inputWrapperHasError()).toBeTruthy();
  });

  it('should not display a placeholder if there are any tags', () => {
    const tags = [{ id: 'Alabama', label: 'Alabama' }];
    const placeholder = 'myPlaceholder';
    const { inputDriver } = createDriver(
      <MultiSelect options={options} tags={tags} placeholder={placeholder} />,
    );
    expect(inputDriver.getPlaceholder()).toBe('');
  });

  it('should focus the input when clicking on the input wrapper', () => {
    const { driver, inputDriver } = createDriver(
      <MultiSelect options={options} />,
    );
    expect(inputDriver.isFocus()).toBeFalsy();
    driver.clickOnInputWrapper();
    expect(inputDriver.isFocus()).toBeTruthy();
  });

  it('should check that wrapper has focus when the input element does', () => {
    const { driver, inputDriver } = createDriver(
      <MultiSelect options={options} />,
    );
    driver.clickOnInputWrapper();
    expect(inputDriver.isFocus()).toBeTruthy();
    expect(driver.inputWrapperHasFocus()).toBeTruthy();
  });

  it('should contain specific tags', () => {
    const tags = [
      { id: 'Alabama', label: 'Alabama' },
      { id: 'Alaska', label: 'Alaska' },
    ];

    const { driver } = createDriver(
      <MultiSelect options={options} tags={tags} />,
    );
    expect(driver.numberOfTags()).toBe(tags.length);
    expect(driver.getTagLabelAt(0)).toBe('Alabama');
    expect(driver.getTagLabelAt(1)).toBe('Alaska');
  });

  it('should support pasting legal multiple tags', () => {
    const onSelect = jest.fn();
    const onChange = jest.fn();
    const { driver, inputDriver } = createDriver(
      <MultiSelect options={options} onSelect={onSelect} onChange={onChange} />,
    );
    driver.focus();
    inputDriver.trigger('paste');
    inputDriver.enterText(`${options[0].value}, ${options[2].value}`);
    expect(onChange).toBeCalledWith({ target: { value: '' } });
    expect(onSelect).toBeCalledWith([
      { id: options[0].id, label: options[0].value },
      { id: options[2].id, label: options[2].value },
    ]);
  });

  it('should support pasting illegal multiple tags with error theme', () => {
    const onSelect = jest.fn();
    const onChange = jest.fn();
    const { driver, inputDriver } = createDriver(
      <MultiSelect options={options} onSelect={onSelect} onChange={onChange} />,
    );
    driver.focus();
    inputDriver.trigger('paste');
    inputDriver.enterText(`${options[0].value}, Arkansa`);
    expect(onChange).toBeCalledWith({ target: { value: '' } });
    const onSelectCallArgs = onSelect.mock.calls[0][0];
    expect(onSelectCallArgs[0]).toEqual({
      id: options[0].id,
      label: options[0].value,
    });
    expect(onSelectCallArgs[1].label).toEqual('Arkansa');
    expect(onSelectCallArgs[1].theme).toEqual('error');
    expect(onSelectCallArgs[1].id.startsWith('customOption_')).toEqual(true);
  });

  describe('onManuallyCalled', () => {
    it('should be called after Enter is pressed and input is not empty', () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <MultiSelect
          options={options}
          onManuallyInput={onManuallyInput}
          value="custom value"
        />,
      );

      driver.focus();
      inputDriver.enterText('custom value');
      driver.pressKey('Enter');

      expect(onManuallyInput.mock.calls).toHaveLength(1);
    });

    it('should be called after delimiter is pressed and input is not empty', () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <MultiSelect
          options={options}
          onManuallyInput={onManuallyInput}
          value="custom value"
        />,
      );

      driver.focus();
      inputDriver.enterText('custom value');
      driver.pressKey(',');

      expect(onManuallyInput.mock.calls).toHaveLength(1);
      expect(onManuallyInput.mock.calls[0][0]).toBe('custom value');
    });

    it('should be called after delimiter is pressed given no options', () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <MultiSelect onManuallyInput={onManuallyInput} value="custom value" />,
      );

      driver.focus();
      inputDriver.enterText('custom value');
      driver.pressKey(',');

      expect(onManuallyInput.mock.calls).toHaveLength(1);
      expect(onManuallyInput.mock.calls[0][0]).toBe('custom value');
    });
  });

  describe('onKeyDown', () => {
    it('should be called once when character key pressed', () => {
      const onKeyDown = jest.fn();
      const { driver, inputDriver } = createDriver(
        <MultiSelect options={options} onKeyDown={onKeyDown} />,
      );

      driver.focus();
      inputDriver.keyDown('a');
      expect(onKeyDown.mock.calls).toHaveLength(1);
    });
  });

  it('should call onRemoveTag when removing tags', () => {
    const tagId = 'SweetHome';
    const tags = [{ id: tagId, label: 'Alabama' }];
    const onRemoveTag = jest.fn();
    const { driver } = createDriver(
      <MultiSelect autoFocus tags={tags} onRemoveTag={onRemoveTag} />,
    );

    const tagDriver = driver.getTagDriverByTagId(tagId);
    tagDriver.removeTag();

    expect(onRemoveTag).toHaveBeenCalledWith(tagId);
  });

  it('should set maxHeight to initial when no height limit introduced', () => {
    const { driver } = createDriver(<MultiSelect options={options} />);

    expect(driver.getMaxHeight()).toBe('initial');
  });

  it('should set maxHeight when maxNumRows defined', () => {
    const { driver } = createDriver(
      <MultiSelect maxNumRows={2} options={options} />,
    );

    expect(driver.getMaxHeight()).toBe('70px');
  });

  it('should set maxHeight when maxNumRows defined (large tags)', () => {
    const options = [
      { value: 'Alaska', id: 'Alaska', label: 'Alaska', size: 'large' },
    ];

    const { driver } = createDriver(
      <MultiSelect maxNumRows={2} tags={options} options={options} />,
    );

    expect(driver.getMaxHeight()).toBe('94px');
  });

  it('should allow to write any text as tag when options are empty', () => {
    const onSelect = jest.fn();
    const { driver } = createDriver(
      <MultiSelect value="aab" onSelect={onSelect} />,
    );
    driver.pressKey(',');
    expect(onSelect).toBeCalledWith([{ id: 'aab', label: 'aab' }]);
  });

  it('should allow to write tags only from options', () => {
    const onSelect = jest.fn();
    const { driver } = createDriver(
      <MultiSelect value="aab" options={options} onSelect={onSelect} />,
    );
    driver.pressKey(',');
    expect(onSelect).toBeCalledWith([
      { id: options[0].id, label: options[0].value },
    ]);
  });

  // TODO: dnd testkit is missing - once it's available, this test has to be completed and run
  xit('should allow reordering the tags', () => {
    const tags = [
      { label: 'Alabama', id: 'Alabama' },
      { label: 'California2', id: 'California2' },
      { label: 'California3', id: 'California3' },
      { label: 'California4', id: 'California4' },
    ];
    const onReorder = jest.fn();
    const {
      driver: { getTagLabelAt, getTagDriverByTagId },
    } = createDriver(
      <MultiSelect
        draggable
        options={options}
        tags={tags}
        onReorder={onReorder}
        autoFocus
      />,
    );
    getTagDriverByTagId('Alabama').dragTo(
      getTagDriverByTagId('California3').element,
    );
    expect(onReorder).toBeCalledWith({ removedIndex: 0, addedIndex: 2 });

    expect(getTagLabelAt(0)).toBe('California3');
    expect(getTagLabelAt(2)).toBe('Alabama');
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const tags = [{ id: 'Alabama', label: 'Alabama' }];
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <MultiSelect dataHook={dataHook} tags={tags} />
          </div>,
        ),
      );
      const multiSelectTestkit = multiSelectTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(multiSelectTestkit.driver.exists()).toBeTruthy();
      expect(multiSelectTestkit.inputDriver.exists()).toBeTruthy();
      expect(multiSelectTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
      expect(
        multiSelectTestkit.driver.getTagDriverByTagId('Alabama').exists(),
      ).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const tags = [{ id: 'Alabama', label: 'Alabama' }];
      const wrapper = mount(<MultiSelect dataHook={dataHook} tags={tags} />);
      const multiSelectTestkit = enzymeMultiSelectTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(multiSelectTestkit.driver.exists()).toBeTruthy();
      expect(multiSelectTestkit.inputDriver.exists()).toBeTruthy();
      expect(multiSelectTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
      expect(
        multiSelectTestkit.driver.getTagDriverByTagId('Alabama').exists(),
      ).toBeTruthy();
    });
  });
});
