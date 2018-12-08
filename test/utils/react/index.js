import { render } from 'react-testing-library';
import { Simulate } from 'react-dom/test-utils';

const createDriver = (driverFactory, rendered) => {
  // TODO: See if Simulate should be replaced with fireEvent from 'react-testing-library'
  return driverFactory({
    element: rendered.container.firstChild,
    wrapper: rendered.container,
    eventTrigger: Simulate,
  });
};

/**
 * Creates a `render` function that returns the same object as `react-testing-library`'s render, but
 * with and extra `driver` property.
 */
const createRendererWithDriver = driverFactory => jsx => {
  const rendered = render(jsx);

  const driver = createDriver(driverFactory, rendered);

  return {
    ...rendered,
    driver,
  };
};

export * from 'react-testing-library';
export { createDriver, createRendererWithDriver };
