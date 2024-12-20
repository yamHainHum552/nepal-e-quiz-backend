import { HistoryQuestions } from "../../schemas/index.js";
export const HistoryData = async (req, res) => {
  try {
    const data = await HistoryQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const CreateHistory = async (req, res) => {
  try {
    const data = await req.body;

    const newQuestion = new HistoryQuestions({
      id: data.id,
      question: data.question,
      options: data.options,
      answer: data.answer,
    });
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: "Error creating data", error });
  }
};

export const DeleteHistory = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedQuestion = await HistoryQuestions.findOneAndDelete({
      id,
    });
    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res
      .status(200)
      .json({ message: "Question deleted successfully", deletedQuestion });
  } catch (error) {
    res.status(500).json({ message: "Error deleting data", error });
  }
};

export const UpdateHistory = async (req, res) => {
  try {
    const { id, question, options, answer } = req.body;

    const existingQuestion = await HistoryQuestions.findOne({
      id: Number(id),
    });
    if (!existingQuestion) {
      return res.status(404).json({ message: "Questions doesn't exists" });
    }
    const updatedQuestion = await HistoryQuestions.findOneAndUpdate(
      { id },
      { id, question, options, answer },
      { new: true }
    );

    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Error updating data", error });
  }
};
