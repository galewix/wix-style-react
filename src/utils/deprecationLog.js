/* eslint-disable no-console */
let deprecationLog = function () {};

if (process.env.NODE_ENV !== 'production') {
  class DeprecationLogger {
    reportedKeys = new Set();

    /**
     * Log a warning message, once per key. (Calling `log` twice with same key would result in one log)
     *
     * @param {*} message
     * @param {*} key
     * @memberof DeprecationLogger
     */
    log(message, key) {
      if (!this.reportedKeys.has(key)) {
        this.reportedKeys.add(key);
        this.printWarning(message);
      }
    }

    printWarning = msg => {
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
  }

  const logger = new DeprecationLogger();

  deprecationLog = (msg, key) => logger.log(msg, key);
}

export default deprecationLog;
