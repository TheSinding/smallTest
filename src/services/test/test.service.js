// Initializes the `test` service on path `/test`
const createService = require('feathers-memory');
const hooks = require('./test.hooks');
const filters = require('./test.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'test',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/test', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('test');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
