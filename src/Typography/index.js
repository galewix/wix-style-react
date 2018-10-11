import typography from './Typography.scss';
import {ClassDeprecationLogger} from './ClassDeprecationLogger';

export * from './Utils';

const deprecatedRegExp = new RegExp('^([ht][1-6]_[1-6]|t[1-6])$');

const deprecationLogger = new ClassDeprecationLogger();

const typographyProxy = new Proxy(typography, {
  get(target, prop) {
    if (deprecatedRegExp.test(prop)) {
      deprecationLogger.log(prop, `Typography class ${prop} is deprecated. Please use new classes described at https://wix-wix-style-react.surge.sh/?selectedKind=Styling&selectedStory=1.2%20Typography%20Classes`);

    }
    return target[prop];
  }
});

export default typographyProxy;

