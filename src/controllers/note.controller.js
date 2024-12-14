import createNote from "./Note/create.js";
import deleteNote from "./Note/delete.js";
import readAllNotes from "./Note/read.js";
import updateNote from "./Note/update.js";

const noteController = {
  create: createNote,
  read: readAllNotes,
  update: updateNote,
  delete: deleteNote,
};

export default noteController;
