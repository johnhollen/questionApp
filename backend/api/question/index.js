const express = require('express');
const router = express.Router();

const controller = require('./question.controller');

//GET endpoints
router.get('/', controller.getAll);
router.get('/one/:questionId', controller.getOne);
router.get('/random', controller.getRandomQuestion);

//POST endpoints
router.post('/', controller.create);

//PUT endpoints
router.put('/:optionId', controller.update);

module.exports = router;
