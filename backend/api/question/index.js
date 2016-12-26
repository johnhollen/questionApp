var express = require('express');
var router = express.Router();

var controller = require('./question.controller');

//GET endpoints
router.get('/', controller.getAll);
router.get('/one/:questionId', controller.getOne);
router.get('/random', controller.getRandomQuestion);

//POST endpoints
router.post('/', controller.create);

//PUT endpoints
router.put('/:optionId', controller.update);

module.exports = router;
