module.exports = (app) => {
  const apiPrefix = '/api';
  app.use(apiPrefix + '/questions', require('./question'));
};
