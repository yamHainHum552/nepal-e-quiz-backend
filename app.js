import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import express from "express";
import mongoose from "mongoose";

import {
  HistoryQuestions,
  SportsQuestions,
  GeographyQuestions,
  KathaQuestions,
  LiteratureQuestions,
  PoliticsQuestions,
} from "./schemas/index";
const app = express();
app.use(cors());

const mongoDBURI = process.env.MONGODB_PUBLIC_URI;
mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

//   Get the data
app.get("/api/geography/getData", async (req, res) => {
  try {
    const data = await GeographyQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.get("/api/history/getData", async (req, res) => {
  try {
    const data = await HistoryQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.get("/api/sports/getData", async (req, res) => {
  try {
    const data = await SportsQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.get("/api/katha/getData", async (req, res) => {
  try {
    const data = await KathaQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.get("/api/literature/getData", async (req, res) => {
  try {
    const data = await LiteratureQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.get("/api/politics/getData", async (req, res) => {
  try {
    const data = await PoliticsQuestions.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

//Create Data
// app.post("/createData", async (req, res) => {
//   try {
//     const data = await req.body;
//     console.log(data);

//     const newQuestion = new Question({
//       questionID: data.questionID,
//       question: data.question,
//       options: data.options,
//       correctAnswer: data.correctAnswer,
//     });
//     const savedQuestion = await newQuestion.save();
//     res.status(201).json(savedQuestion);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating data", error });
//   }
// });

// Update data
// app.put("/updateData/:questionID", async (req, res) => {
//   try {
//     const updatedQuestion = await Question.findOneAndUpdate(
//       { questionID: req.params.questionID },
//       {
//         question: req.body.question,
//         options: req.body.options,
//         correctAnswer: req.body.correctAnswer,
//       },
//       { new: true } // Return the updated document
//     );
//     if (!updatedQuestion) {
//       return res.status(404).json({ message: "Question not found" });
//     }
//     res.status(200).json(updatedQuestion);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating data", error });
//   }
// });

// //Delete Data
// app.delete("/deleteData/:questionID", async (req, res) => {
//   try {
//     const deletedQuestion = await Question.findOneAndDelete({
//       questionID: req.params.questionID,
//     });
//     if (!deletedQuestion) {
//       return res.status(404).json({ message: "Question not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Question deleted successfully", deletedQuestion });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting data", error });
//   }
// });

export default app;
