const Question = require('./question.model');
const _ = require('lodash');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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

        const randomNumber = Math.floor(Math.random() * count);

        Question.findOne({}).skip(randomNumber).exec((err, question) => {
            if (err) {
                return handleError(res, err);
            }
            if (!question) {
                return res.status(404);
            }

            res.status(200).json(question);
        });
    });
};

/*
 POST - callbacks
 */

exports.create = function (req, res) {
    const incomingQuestion = req.body.question;

    Question.create(incomingQuestion, (err, question) => {
        if (err) {
            return handleError(res, err);
        }
        res.status(200).json(question);
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

        let updated = question;

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


//Handle internal server errors
const handleError = (res, err) => res.status(500).send(err);
