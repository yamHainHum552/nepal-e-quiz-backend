import Updates from "../../schemas/update.js";

export const getUpdate = async (req, res) => {
  try {
    const data = await Updates.find(); // Fetch all questions
    res.status(200).json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
};
