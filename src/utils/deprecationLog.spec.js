import deprecationLog from './deprecationLog';
const cachedConsoleWarn = global.console.warn;

describe('deprecationLog', () => {
  beforeEach(() => {
    global.console.warn = jest.fn();
  });

  afterEach(() => {
    global.console.warn = cachedConsoleWarn;
  });

  it('should log warning in dev mode', () => {
    deprecationLog('Some message');
    expect(global.console.warn).toBeCalledWith('Wix-Style-React: [WARNING] Some message');
  });

  it('should log only once per class', () => {
    deprecationLog('message', 'keyA');
    expect(global.console.warn.mock.calls.length).toEqual(1);
    deprecationLog('message', 'keyA');
    expect(global.console.warn.mock.calls.length).toEqual(1);
    deprecationLog('message', 'keyB');
    expect(global.console.warn.mock.calls.length).toEqual(2);
  });

});
