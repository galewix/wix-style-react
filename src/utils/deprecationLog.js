let deprecationLog = function() {};

if (process.env.NODE_ENV !== 'production') {
  class DeprecationLogger {
    reportedMessages = new Set();

    /**
     * Log a warning message, once per key. (Calling `log` twice with same key would result in one log)
     *
     * @param {*} message
     * @memberof DeprecationLogger
     */
    log(message) {
      if (!this.reportedMessages.has(message)) {
        this.reportedMessages.add(message);
        this.printWarning(message);
      }
    }
    printWarning = msg => {
      const message = `Wix-Style-React: [WARNING] ${msg}`;
      if (console) {
        console.warn(message); // eslint-disable-line
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

  deprecationLog = msg => logger.log(msg);
}

export default deprecationLog;
