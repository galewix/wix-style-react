import deprecationLog from './deprecationLog';

const cachedConsoleWarn = global.console.warn;

describe('deprecationLog', () => {
  beforeEach(() => {
    global.console.warn = jest.fn();
  });

  afterEach(() => {
    global.console.warn = cachedConsoleWarn;
  });

  it('should log the appropriate message content', () => {
    deprecationLog('Some message');
    expect(global.console.warn).toBeCalledWith(
      'Wix-Style-React: [WARNING] Some message',
    );
  });

  it('should log only once per message', () => {
    deprecationLog('message');
    expect(global.console.warn.mock.calls).toHaveLength(1);
    deprecationLog('message');
    expect(global.console.warn.mock.calls).toHaveLength(1);
    deprecationLog('message2');
    expect(global.console.warn.mock.calls).toHaveLength(2);
  });
});
