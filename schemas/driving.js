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
    imageURL: {
      type: String,
      required: false,
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
  { collection: "driving" }
);

function arrayLimit(val) {
  return val.length === 4;
}

const DrivingQuestions = mongoose.model("driving", questionSchema);

export default DrivingQuestions;
