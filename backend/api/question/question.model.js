const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const AnswerSchema = new Schema({
    text: String,
    counter: {type: Number, default: 0}
});

const QuestionSchema = new Schema({
    text: String,
    options: [AnswerSchema]
});


module.exports = mongoose.model('Question', QuestionSchema);
