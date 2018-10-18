const merge = require('lodash/merge');
const path = require('path');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = (config, env, defaultConfig) => {
  const newConfig = wixStorybookConfig(defaultConfig);

  return merge(newConfig, {
    context: path.resolve(__dirname, '../../src'),
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    resolve: {
      alias: {
        'wix-style-react': path.resolve(__dirname, '../../src')
      },
    },
    module: {
      rules: newConfig.module.rules.concat({
        test: /\.story\.js$/,
        loader: 'wix-storybook-utils/loader',
        options: {
          storyConfig: {
            moduleName: 'wix-style-react',
            repoBaseURL: 'https://github.com/wix/wix-style-react/tree/master/src/'
          }
        }
      })
    }
  });
};
