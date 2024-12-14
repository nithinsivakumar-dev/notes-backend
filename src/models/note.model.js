// Import mongoose
import mongoose from "mongoose";

// Create a schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Export it as a model
export const Note = mongoose.model("Note", noteSchema);
