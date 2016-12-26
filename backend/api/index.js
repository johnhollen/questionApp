module.exports = function(app) {

  var apiPrefix = '/api';

  app.use(apiPrefix + '/questions', require('./question'));

};
