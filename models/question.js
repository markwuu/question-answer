var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
    min: [5, "The question must be at least 5 characters"],
    max: 100
  }
});

module.exports = mongoose.model("Question", QuestionSchema);
