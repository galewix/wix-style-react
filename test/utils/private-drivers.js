import omit from 'lodash/omit';
/**
 * Symbol for accessing driver methods which are internal
 * (we don't want to expose them to WSR consumers)
 */
export const INTERNAL_DRIVER_SYMBOL = Symbol('internal-driver');

/**
 * Merge driver 2 into driver 1
 *
 * It should take care of merging Internal methods into the target'shidden internal driver
 * (which sits under the [INTERNAL_DRIVER] property). Currently not supported.
 */
export function mergeDrivers(target, source) {
  // TODO: merge driver2's internal methods into driver1's internal methods.
  // TODO: make this a reduce that accepts a list of drivers.
  if (target[INTERNAL_DRIVER_SYMBOL]) {
    throw new Error('mergeDrivers(): Merging into a driver with INTERNAL_DRIVER methods, is currently not supported yet.');
  }

  return {
    ...target,
    ...source
  };
}

/**
 * Flatten driver by spreading all internal methods,
 * and removing the INTERNAL_DRIVER property.
 * Does not mutate the given driver.
 */
export function flattenInternalDriver(driver) {
  if (driver[INTERNAL_DRIVER_SYMBOL]) {
    return {
      ...omit(driver, INTERNAL_DRIVER_SYMBOL),
      ...driver[INTERNAL_DRIVER_SYMBOL]
    };
  } else {
    return driver;
  }
}
