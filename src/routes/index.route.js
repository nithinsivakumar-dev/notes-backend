// Import express
import express from "express";
import userRouter from "./user.route.js";
import noteRouter from "./note.route.js";

// Create a router
const indexRouter = express.Router();

indexRouter.use("/api/v1/users", userRouter);

indexRouter.use("/api/v1/notes", noteRouter);

// Export the router
export default indexRouter;
