const Question = require('./question.model');
const _ = require('lodash');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

// Handle internal server errors
const handleError = (res, err) => res.status(500).send(err);
const handleBadRequest = (res, reason) => res.status(400).send(reason);

/*
 GET - callbacks
 */
exports.getAll = (req, res) => {
    Question.find({}, (err, questions) => {
        if (err) {
            return handleError(res, err);
        }
        if (!questions) {
            return res.status(404);
        }

        return res.status(200).json(questions);
    });
};

exports.getOne = (req, res) => {
    const questionId = req.params.questionId;

    Question.findById(questionId, (err, question) => {
        if (err) {
            return handleError(res, err);
        }
        if (!question) {
            return res.status(404);
        }

        return res.status(200).json(question);
    });
};

exports.getRandomQuestion = (req, res) => {
    Question.count({}, (err, count) => {
        if (err) {
            return handleError(res, err);
        }

        if (count === 0) return res.status(200).json({});

        const randomNumber = Math.floor(Math.random() * count);

        Question.findOne({}).skip(randomNumber).exec((err, question) => {
            if (err) {
                return handleError(res, err);
            }
            if (!question) {
                return res.status(404);
            }

            return res.status(200).json(question);
        });
    });
};

exports.getQuestionsByUser = (req, res) => {
    const userId = req.params.userId;
    Question.find({owner: userId}, (err, questions) => {
        if (err) return handleError(res, err);
        return res.status(200).json(questions);
    });
};

/*
 POST - callbacks
 */

exports.create = (req, res) => {
    const jsonBody = JSON.parse(req.body);
    const incomingQuestion = jsonBody.question;

    if (!incomingQuestion.owner) return handleBadRequest(res, 'Need to specify owner.');
    if (_.isEmpty(incomingQuestion.text)) return handleBadRequest(res, 'Need to specify question');
    if (_.isEmpty(incomingQuestion.options)) return handleBadRequest(res, 'Need provide answers');
    if (incomingQuestion.options.length !== 2) return handleBadRequest(res, 'Need two answers');

    const areOptionsValid = !_.isEmpty(_.first(incomingQuestion.options).text)
        && !_.isEmpty(_.last(incomingQuestion.options).text);
    if (!areOptionsValid) return handleBadRequest(res, 'Need to specify answers');

    Question.create(incomingQuestion, (err, question) => {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(question);
    });
};

/*
 PUT - callbacks
 */

exports.update = (req, res) => {
    const optionId = new ObjectId(req.params.optionId);

    Question.findOne({'options._id': optionId}, (err, question) => {
        if (err) {
            return handleError(res, err);
        }
        if (!question) {
            return res.status(404);
        }

        const updated = question;

        _.forEach(updated.options, (option) => {
            if (option._id.equals(optionId)) {
                option.counter++;
            }
        });

        updated.save((err, updatedQuestion) => {
            if (err) {
                return handleError(res, err);
            }

            return res.status(200).json(updatedQuestion);
        });
    });
};
