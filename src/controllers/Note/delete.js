import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const existingNote = await Note.findById(id);

    if (!existingNote) {
      return res
        .status(404)
        .send(
          new ApiResponse(404, null, "Note with the provided ID not found.")
        );
    }

    await existingNote.deleteOne();

    res
      .status(200)
      .send(new ApiResponse(200, null, "Note deleted successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed to delete note."));
  }
};

export default deleteNote;
