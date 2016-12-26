var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var AnswerSchema = new Schema({
  text: String,
  counter: {type: Number, default: 0}
});

var QuestionSchema = new Schema({
  text: String,
  options: [AnswerSchema]
});


module.exports = mongoose.model('Question', QuestionSchema);
