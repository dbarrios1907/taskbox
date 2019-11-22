const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
    ]
  });

  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        options: {
          plugins: ['@babel/plugin-transform-vue-jsx'],
        }
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  return config;
};
