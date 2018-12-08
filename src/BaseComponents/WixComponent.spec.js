import React from 'react';
import PropTypes from 'prop-types';
import { createRendererWithDriver, cleanup } from '../../test/utils/react';
import WixComponent from './WixComponent';

class Fixture extends WixComponent {
  static propTypes = {
    dataHook: PropTypes.string,
  };
  render() {
    return <div>Fixture</div>;
  }
}

const fixtureDriverFactory = ({ element }) => {
  return {
    getDataHook: () => element.dataset['hook'],
  };
};

describe('WixComponent', () => {
  const render = createRendererWithDriver(fixtureDriverFactory);

  it('should add data-hook to the root DOM node', () => {
    const { driver } = render(<Fixture dataHook="thehook" />);

    expect(driver.getDataHook()).toBe('thehook');
  });

  it('should update data-hook on change', () => {
    const { driver, rerender } = render(<Fixture dataHook="thehook" />);

    rerender(<Fixture dataHook="newhook" />);

    expect(driver.getDataHook()).toBe('newhook');
  });
});
