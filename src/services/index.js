const test = require('./test/test.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(test);
};
