import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const readAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find();

    res.status(200).send(allNotes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to read all notes."));
  }
};

export default readAllNotes;
