import React from 'react';

import { componentFactory, unitDriverFactory } from './testkit/Unit';

describe('<Unit/>', () => {
  const createDriver = props => unitDriverFactory(componentFactory(props));

  it('should create a unit and render the given children', () => {
    const driver = createDriver({ children: <div className="smth" /> });
    expect(driver.isEmpty()).toEqual(false);
    expect(driver.hasChild('.smth')).toEqual(true);
  });
});
