import deprecationLog from '../../utils/deprecationLog';

deprecationLog(
  `Using "RangePolyfill.js" is deprecated. Please use the newer polyfills in "testkit/polyfills"`,
);

if (!document.createRange) {
  document.createRange = () => {
    return (function() {
      const pub = {};
      pub.setEnd = function(elem) {
        pub.commonAncestorContainer = elem;
      };

      pub.setStart = function(elem) {
        pub.commonAncestorContainer = elem;
      };

      pub.getBoundingClientRect = function() {
        return { right: 0 };
      };

      pub.getClientRects = () => [];

      return pub;
    })();
  };
}
