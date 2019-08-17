var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question required :)"],
    min: [5, "The question must be at least 5 characters"],
    max: 100
  }
});

QuestionSchema.virtual("question").get(function() {
  return this.question;
});

module.exports = mongoose.model("Question", QuestionSchema);
