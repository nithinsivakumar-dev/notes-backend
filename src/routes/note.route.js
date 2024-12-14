// Import express
import express from "express";
import noteController from "../controllers/note.controller.js";

// Create a router
const noteRouter = express.Router();

noteRouter.post("/new", noteController.create);

noteRouter.get("/all", noteController.read);

noteRouter.put("/edit/:id", noteController.update);

noteRouter.delete("/remove/:id", noteController.delete);

// Export the router
export default noteRouter;
