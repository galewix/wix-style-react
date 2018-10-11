import typography from '.';

const originalConsoleWarn = global.console.warn; // eslint-disable-line no-console
describe('Typography deprecation', () => {
  beforeEach(() => {
    global.console.warn = jest.fn();
  });

  it('Should show deprecationLog for old headings', () => {
    expect(typography.h1_1).toEqual('h1_1');
    expect(typography.h2_1).toEqual('h2_1');
    expect(typography.h3_1).toEqual('h3_1');
    expect(typography.h4_1).toEqual('h4_1');
    expect(typography.h5_1).toEqual('h5_1');
    expect(typography.h6_1).toEqual('h6_1');
    expect(global.console.warn.mock.calls.length).toEqual(6);
  });


  it('Should show deprecationLog for old text classes', () => {
    expect(typography.t1).toEqual('t1');
    expect(typography.t2).toEqual('t2');
    expect(typography.t3).toEqual('t3');
    expect(typography.t4).toEqual('t4');
    expect(typography.t5).toEqual('t5');
    expect(typography.t6).toEqual('t6');
    expect(typography.t1_1).toEqual('t1_1');
    expect(typography.t2_1).toEqual('t2_1');
    expect(typography.t3_1).toEqual('t3_1');
    expect(typography.t4_1).toEqual('t4_1');
    expect(typography.t5_1).toEqual('t5_1');
    expect(typography.t6_1).toEqual('t6_1');
    // Some tx_2, adn tx_3, etc... don't exist, so don't bother to test it.
    expect(global.console.warn.mock.calls.length).toEqual(12);
  });

  it('Should not show deprecationLog for new classes', () => {
    function expectClass(name) {
      expect(typography[name]).toEqual(name);
    }

    expectClass('h1');
    expectClass('h2');
    expectClass('h3');
    expectClass('h4');
    expectClass('h5');
    expectClass('h6');

    expectClass('text');

    expectClass('sizeTiny');
    expectClass('sizeSmall');
    expectClass('sizeMedium');

    expectClass('weightThin');
    expectClass('weightNormal');
    expectClass('weightBold');

    expectClass('skinStandard');
    expectClass('skinPremium');
    expectClass('skinSuccess');
    expectClass('skinError');

    expectClass('light');
    expectClass('secondary');
    expectClass('link');
    expectClass('disabled');

    expect(global.console.warn.mock.calls.length).toEqual(0);
  });

  afterAll(() => {
    global.console.warn = originalConsoleWarn;
  });
});
