import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
  },
  { collection: "updates" }
);

const Updates = mongoose.model("update", questionSchema);

export default Updates;
