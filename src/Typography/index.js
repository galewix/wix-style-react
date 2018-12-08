import typography from './Typography_INTERNAL.scss';
import deprecationLog from '../utils/deprecationLog';

export * from './Utils';

let typographyProxy = typography;

// Proxy is not supported in IE11, so we enable it only for development
if (process.env.NODE_ENV !== 'production') {
  const deprecatedRegExp = new RegExp('^([ht][1-6]_[1-6]|t[1-6])$');

  /* eslint-disable no-restricted-globals */
  typographyProxy = new Proxy(typography, {
    /* eslint-enable no-restricted-globals */

    get(target, prop) {
      if (deprecatedRegExp.test(prop)) {
        deprecationLog(
          `Typography class ${prop} is deprecated. Please use new classes described at https://wix-wix-style-react.surge.sh/?selectedKind=Styling&selectedStory=1.2%20Typography%20Classes`,
        );
      }
      return target[prop];
    },
  });
}

export default typographyProxy;
