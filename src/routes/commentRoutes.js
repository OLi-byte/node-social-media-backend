import { createCommentController } from "../controllers/commentController.js";
import { Router } from "express";

const commentRouter = Router();

commentRouter.post("/", createCommentController);

export default commentRouter;
