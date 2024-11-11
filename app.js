import cors from "cors";
import { dbConnect } from "./dbConnect.js";

import express from "express";

import {
  DrivingData,
  GeographyData,
  HistoryData,
  KathaData,
  LiteratureData,
  PoliticsData,
  ReligionData,
  ScienceData,
  SportsData,
} from "./apis/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  await dbConnect();
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello world from Vercel!" });
});

//   Get the data
app.get("/api/geography/getData", GeographyData);
app.get("/api/history/getData", HistoryData);
app.get("/api/sports/getData", SportsData);
app.get("/api/gaun/getData", KathaData);
app.get("/api/literature/getData", LiteratureData);
app.get("/api/politics/getData", PoliticsData);
app.get("/api/religion/getData", ReligionData);
app.get("/api/science/getData", ScienceData);
app.get("/api/driving/getData", DrivingData);

// app.listen(3000, () => {
//   console.log("Server running on");
// });

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
