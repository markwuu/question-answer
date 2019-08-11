var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  answer: { type: String, required: true, min: 5, max: 100 }
});

module.exports = mongoose.model("Answer", AnswerSchema);
