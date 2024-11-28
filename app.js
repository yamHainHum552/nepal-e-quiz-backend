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
  DeleteSports,
  UpdateSports,
  CreateSports,
  DeleteGeography,
  DeleteReligion,
  DeleteHistory,
  DeleteKatha,
  DeleteScience,
  DeletePolitics,
  DeleteLiterature,
  UpdateGeography,
  UpdatePolitics,
  UpdateKatha,
  UpdateReligion,
  UpdateScience,
  UpdateLiterature,
  UpdateHistory,
  CreateGeography,
  CreatePolitics,
  CreateKatha,
  CreateHistory,
  CreateLiterature,
  CreateScience,
  CreateReligion,
} from "./apis/index.js";
import { getUpdate } from "./apis/updates/index.js";

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
app.get("/api/update/getData", getUpdate);

// Delete
app.delete("/api/delete/sports", DeleteSports);
app.delete("/api/delete/literature", DeleteLiterature);
app.delete("/api/delete/politics", DeletePolitics);
app.delete("/api/delete/science", DeleteScience);
app.delete("/api/delete/gaun", DeleteKatha);
app.delete("/api/delete/history", DeleteHistory);
app.delete("/api/delete/religion", DeleteReligion);
app.delete("/api/delete/geography", DeleteGeography);

// Update
app.put("/api/update/sports", UpdateSports);
app.put("/api/update/history", UpdateHistory);
app.put("/api/update/literature", UpdateLiterature);
app.put("/api/update/science", UpdateScience);
app.put("/api/update/religion", UpdateReligion);
app.put("/api/update/gaun", UpdateKatha);
app.put("/api/update/politics", UpdatePolitics);
app.put("/api/update/geography", UpdateGeography);

// Create
app.post("/api/create/sports", CreateSports);
app.post("/api/create/geography", CreateGeography);
app.post("/api/create/politics", CreatePolitics);
app.post("/api/create/gaun", CreateKatha);
app.post("/api/create/history", CreateHistory);
app.post("/api/create/literature", CreateLiterature);
app.post("/api/create/science", CreateScience);
app.post("/api/create/religion", CreateReligion);

// app.listen(5000, () => {
//   console.log("Server running on 5000");
// });

export default app;
