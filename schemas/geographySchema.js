import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
      validate: [arrayLimit, "{PATH} should have exactly four options"],
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { collection: "geography" }
);

function arrayLimit(val) {
  return val.length === 4;
}

const GeographyQuestions = mongoose.model("geography", questionSchema);

export default GeographyQuestions;
