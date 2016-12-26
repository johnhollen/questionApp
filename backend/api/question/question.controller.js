var Question = require('./question.model');
var _ = require('lodash');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/*
 GET - callbacks
 */
exports.getAll = function (req, res) {

    Question.find({}, function (err, questions) {
        if (err) {
            return handleError(res, err);
        }
        if (!questions) {
            return res.status(404);
        }

        return res.status(200).json(questions);
    });

};

exports.getOne = function (req, res) {
    var questionId = req.params.questionId;

    Question.findById(questionId, function (err, question) {
        if (err) {
            return handleError(res, err);
        }
        if (!question) {
            return res.status(404);
        }

        return res.status(200).json(question);
    });
};

exports.getRandomQuestion = function (req, res) {
    Question.count({}, function (err, count) {
        if (err) {
            return handleError(res, err);
        }

        var randomNumber = Math.floor(Math.random() * count);

        Question.findOne({}).skip(randomNumber).exec(function (err, question) {
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
    var incomingQuestion = req.body.question;

    Question.create(incomingQuestion, function (err, question) {
        if (err) {
            return handleError(res, err);
        }
        res.status(200).json(question);
    });
};

/*
 PUT - callbacks
 */

exports.update = function (req, res) {
    var optionId = new ObjectId(req.params.optionId);

    Question.findOne({'options._id': optionId}, function (err, question) {
        if (err) {
            return handleError(res, err);
        }
        if (!question) {
            return res.status(404);
        }

        var updated = question;

        _.forEach(updated.options, function (option) {
            if (option._id.equals(optionId)) {
                option.counter++;
            }
        });

        updated.save(function (err, updatedQuestion) {
            if (err) {
                return handleError(res, err);
            }

            return res.status(200).json(updatedQuestion);
        });
    });
};


//Handle internal server errors
function handleError(res, err) {
    return res.status(500).send(err);
}
