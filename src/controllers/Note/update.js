import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const existingNote = await Note.findById(id);

    if (!existingNote) {
      return res
        .status(404)
        .send(
          new ApiResponse(404, null, "Note with the provided ID not found.")
        );
    }

    existingNote.title = title;
    existingNote.content = content;
    await existingNote.save();

    res
      .status(200)
      .send(new ApiResponse(200, existingNote, "Note updated successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed to update note."));
  }
};

export default updateNote;
