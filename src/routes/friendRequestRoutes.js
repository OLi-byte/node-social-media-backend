import { createFriendRequestController } from "../controllers/friendResquestController.js";
import { Router } from "express";

const friendRequestRouter = Router();

friendRequestRouter.post("/", createFriendRequestController);

export default friendRequestRouter;
