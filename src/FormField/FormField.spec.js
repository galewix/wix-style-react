/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import Label from '../Label';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import formFieldDriverFactory from './FormField.driver';

import FormField from '.';

const createDriver = createDriverFactory(formFieldDriverFactory);

describe('FormField', () => {
  const renderFormField = (props = {}) => (
    <FormField {...{ ...props, children: props.children || <div /> }} />
  );
  const label = 'field label';

  it('should have correct displayName', () => {
    const wrapper = mount(renderFormField());
    expect(wrapper.name()).toEqual('FormField');
  });

  describe('`label` prop', () => {
    it('should render contents', () => {
      const driver = createDriver(renderFormField({ label }));
      expect(driver.getLabel().innerHTML).toMatch(label);
    });

    it('should not render div when `label` is undefined', () => {
      const driver = createDriver(renderFormField());
      expect(driver.getLabel()).toEqual(null);
    });
  });

  describe('required', () => {
    const required = true;

    describe('given `label` and `required` props', () => {
      it('should render as required', () => {
        const driver = createDriver(renderFormField({ label, required }));
        expect(driver.isRequired()).toEqual(true);
      });
    });

    describe('given only `required` prop', () => {
      it('should render it inline', () => {
        const driver = createDriver(renderFormField({ required }));
        expect(driver.isRequired()).toEqual(true);
        expect(
          !!driver
            .element()
            .querySelector('[data-hook="formfield-inline-suffixes"]'),
        ).toEqual(true);
      });
    });

    it('should not render when `required` prop', () => {
      const driver = createDriver(renderFormField());
      expect(driver.isRequired()).toEqual(false);
    });
  });

  describe('`infoContent` icon with tooltip', () => {
    const infoContent = 'hello from tooltip';
    const tooltipProps = {
      relative: true,
      appendToParent: true,
      showDelay: 0,
    };

    it('should display `infoContent` value in tooltip', async () => {
      const driver = createDriver(
        renderFormField({ infoContent, tooltipProps }),
      );
      expect(await driver.getInfoContent()).toBe(infoContent);
    });

    describe('given `label`', () => {
      const props = { label, infoContent, tooltipProps };

      it('should display `infoContent` value in tooltip', async () => {
        const driver = createDriver(renderFormField(props));
        expect(await driver.getInfoContent()).toBe(infoContent);
      });
    });
  });

  describe('`children` prop', () => {
    class Children extends React.Component {
      componentDidMount() {
        this.props.onMount();
      }
      render() {
        return <div />;
      }
    }

    it('should be rendered', () => {
      const text = 'hello';
      const driver = createDriver(renderFormField({ children: text }));
      expect(driver.getChildren().innerHTML).toEqual(text);
    });

    describe('when function', () => {
      const setCharactersLeftOnMount = charactersLeft => ({
        setCharactersLeft,
      }) => <Children onMount={() => setCharactersLeft(charactersLeft)} />;

      it('should receive setCharactersLeft', () => {
        const children = jest.fn();
        createDriver(renderFormField({ children }));
        expect(typeof children.mock.calls[0][0].setCharactersLeft).toBe(
          'function',
        );
      });

      describe('with `label` prop', () => {
        it('should display counter when `setCharactersLeft` called', () => {
          const charactersLeft = 87987;
          const driver = createDriver(
            renderFormField({
              label,
              children: setCharactersLeftOnMount(charactersLeft),
            }),
          );
          expect(driver.getLengthLeft()).toBe(charactersLeft);
        });

        it('should display different color when lengtLeft < 0', () => {
          const charactersLeft = -1;
          const driver = createDriver(
            renderFormField({
              label,
              children: setCharactersLeftOnMount(charactersLeft),
            }),
          );
          expect(driver.isLengthExceeded()).toBe(true);
        });

        it('should display 0 when lengtLeft === 0', () => {
          const charactersLeft = 0;
          const driver = createDriver(
            renderFormField({
              label,
              children: setCharactersLeftOnMount(charactersLeft),
            }),
          );
          expect(driver.getLengthLeft()).toBe(0);
        });
      });

      describe('without `label` prop', () => {
        it('should not display counter', () => {
          const driver = createDriver(
            renderFormField({ children: setCharactersLeftOnMount(1) }),
          );
          expect(driver.getLengthLeft()).toEqual(null);
        });
      });
    });
  });

  describe('`id` prop', () => {
    const id = 'five';

    it('should be added to label as `htmlFor` prop', () => {
      const wrapper = mount(renderFormField({ id, label }));
      expect(wrapper.find(Label).prop('for')).toEqual(id);
    });
  });
});
