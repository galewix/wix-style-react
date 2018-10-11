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
});
