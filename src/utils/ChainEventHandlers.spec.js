import { chainEventHandlers } from './ChainEventHandlers';

describe('chainEventHandlers', () => {
  const newEvent = () => ({ defaultPrevented: false });

  it('should run handler by order', () => {
    const callResults = [];
    const funcs = [1, 2, 3, 4].map(i => () => callResults.push(i));
    chainEventHandlers(...funcs)(newEvent());
    expect(callResults).toEqual([1, 2, 3, 4]);
  });

  it('should skip undefined handlers', () => {
    const callResults = [];
    const funcs = [1, undefined, 3, 4].map(i =>
      i ? () => callResults.push(i) : undefined,
    );
    chainEventHandlers(...funcs)(newEvent());
    expect(callResults).toEqual([1, 3, 4]);
  });
});
