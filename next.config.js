const env = require(`./src/config/${process.env.NODE_ENV}.js`);
const path = require('path');

module.exports = {
  env: env,
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  }
}
