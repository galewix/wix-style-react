import fs from 'fs';
import path from 'path';

const NON_COMPONENT_FOLDER_NAMES = [
  'utils',
  'providers',
  'new-icons',
  'dnd-styles',
  'assets',
  'clients',
  'mixins',
  'common',
  'FieldLabelAttributes',
  'Backoffice',
  'BaseComponents',
  'Typography',
  'TPA',
  'Animations',
];

const matches = haystack => needle => haystack.some(h => needle === h);

const defaultOrRoot = object => object.default || object;

const Components = ({ cwd, ignore = [] }) => {
  const componentNameInvalidators = [
    path.extname,
    matches(NON_COMPONENT_FOLDER_NAMES.concat(ignore)),
  ];

  const components = fs
    .readdirSync(cwd)
    .filter(file => !componentNameInvalidators.some(v => v(file)));

  return components.reduce((a, c) => {
    const ref = require(path.resolve(cwd, c));
    a[c] = defaultOrRoot(ref);
    return a;
  }, {});
};

export default Components;
