module.exports = function(app) {

  const apiPrefix = '/api';

  app.use(apiPrefix + '/questions', require('./question'));

};
