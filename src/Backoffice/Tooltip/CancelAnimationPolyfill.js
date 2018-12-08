import deprecationLog from '../../utils/deprecationLog';

deprecationLog(
  `Using "Backoffice/Tooltip/CancelAnimationPolyfill.js" is deprecated. Please use the newer polyfills in "testkit/polyfills"`,
);

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (function() {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      function(callback) {
        window.clearTimeout(callback);
      }
    );
  })();
}
