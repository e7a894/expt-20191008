const path = require('path');
const rootPath = path.resolve(__dirname, '../src');

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;
  config.module.rules.push({
    test: /\.s?css$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  });
  return config;
}