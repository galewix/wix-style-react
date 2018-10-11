import deprecationLog from '../utils/deprecationLog';

/**
 * Logs deprecation logs, one time per class.
 */
export class ClassDeprecationLogger {
  reportedClasses = new Set();

  log(className, message) {
    if (!this.reportedClasses.has(className)) {
      this.reportedClasses.add(className);
      deprecationLog(message);
    }
  }
}
