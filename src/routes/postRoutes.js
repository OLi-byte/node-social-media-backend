import { Router } from "express";
import { createPostController } from "../controllers/postController.js";

const postRouter = Router();

postRouter.post("/", createPostController);

export default postRouter;
