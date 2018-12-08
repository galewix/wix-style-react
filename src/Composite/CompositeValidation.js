import { Children } from 'react';

const validators = {
  ONCE: (types, i, type) =>
    types[i] && types[i].type === type ? i + 1 : false,

  OPTIONAL: (types, i, type) =>
    types[i] && types[i].type === type ? i + 1 : i,

  ANY: types => types.length,

  ONEOF: (types, i, possibleTypes) => {
    if (!types.length) {
      return false;
    }

    return possibleTypes.includes(types[i].type) ? i + 1 : false;
  },

  MULTIPLE: (types, i, type) => {
    if (!types[i] || types[i].type !== type) {
      return false;
    }
    while (types[i] && types[i].type === type) {
      ++i;
    }
    return i;
  },
};

const error = (componentName, rules) => {
  const orderedTypes = rules
    .map(rule => {
      const { validation, type } = rule;
      if (validation === 'ANY') {
        return `* (${validation})`;
      }

      if (validation === 'ONEOF') {
        const types = type.map(t => t.name).join(', ');
        return `${validation}(${types})`;
      }

      return `${type.name} (${validation})`;
    })
    .join(', ');
  return new Error(
    `${componentName} should have children of the following types in this order: ${orderedTypes}`,
  );
};

export const once = type => ({ validation: 'ONCE', type });
export const optional = type => ({ validation: 'OPTIONAL', type });
export const multiple = type => ({ validation: 'MULTIPLE', type });
export const any = () => ({ validation: 'ANY' });
export const oneOf = (...types) => ({ validation: 'ONEOF', type: types });

export const children = (...rules) => {
  return (props, propName, componentName) => {
    if (!rules || rules.length === 0) {
      return new Error(
        `${componentName} should have at least a single child declaration rule`,
      );
    }
    const childrenAsArray = Children.toArray(props[propName]);
    const result = rules.reduce((acc, curr) => {
      if (acc === false) {
        return acc;
      }
      return validators[curr.validation](childrenAsArray, acc, curr.type);
    }, 0);
    if (result === false || childrenAsArray[result]) {
      return error(componentName, rules);
    }
  };
};
