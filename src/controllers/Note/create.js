import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const result = await Note.create({
      title,
      content,
    });

    res
      .status(201)
      .send(new ApiResponse(201, result, "Note created successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed to create note."));
  }
};

export default createNote;
