var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: { type: String, required: true, min: 5, max: 100 }
});

module.exports = mongoose.model("Question", QuestionSchema);
