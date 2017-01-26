const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnswerSchema = new Schema({
    text: String,
    counter: {type: Number, default: 0}
});

const QuestionSchema = new Schema({
    text: String,
    owner: String,
    options: [AnswerSchema]
});


module.exports = mongoose.model('Question', QuestionSchema);
