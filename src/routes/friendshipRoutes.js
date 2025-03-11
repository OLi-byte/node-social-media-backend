import { acceptFriendRequestController } from "../controllers/friendshipController.js";
import { Router } from "express";

const friendshipRouter = Router();

friendshipRouter.post("/", acceptFriendRequestController);

export default friendshipRouter;
