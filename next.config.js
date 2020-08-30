const env = require(`./src/config/${process.env.NODE_ENV}.js`);

module.exports = {
  env: env,
}
