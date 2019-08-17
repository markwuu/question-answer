var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
    min: [5, "The answer must be at least 5 characters"],
    max: 100
  }
});

AnswerSchema.virtual("answer").get(function() {
  return this.answer;
});

module.exports = mongoose.model("Answer", AnswerSchema);
