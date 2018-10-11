/* eslint-disable no-console */
let deprecationLog = function () {};

if (process.env.NODE_ENV !== 'production') {
  const printWarning = msg => {
    const message = `Wix-Style-React: [WARNING] ${msg}`;
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging wix-style-react ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  // we can extend this function with some conditions, etc.
  deprecationLog = msg => printWarning(msg);
}

export default deprecationLog;
