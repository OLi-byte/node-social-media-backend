import { Router } from "express";
import { createLikeController } from "../controllers/likeController.js";

const likeRouter = Router();

likeRouter.post("/", createLikeController);

export default likeRouter;
