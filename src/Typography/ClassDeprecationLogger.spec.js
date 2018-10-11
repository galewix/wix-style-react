import {ClassDeprecationLogger} from './ClassDeprecationLogger';
/* eslint-disable no-console */
const originalConsoleWarn = console.warn;

describe('ClassDeprecationLogger', () => {
  beforeEach(() => {
    console.warn = jest.fn();
  });

  it('Should log only once per class', () => {
    const logger = new ClassDeprecationLogger();
    logger.log('classA', 'message');
    expect(console.warn.mock.calls.length).toEqual(1);
    logger.log('classA', 'message');
    expect(console.warn.mock.calls.length).toEqual(1);
    logger.log('classB', 'message');
    expect(console.warn.mock.calls.length).toEqual(2);
  });

  afterEach(() => {
    console.warn = originalConsoleWarn;
  });
});
