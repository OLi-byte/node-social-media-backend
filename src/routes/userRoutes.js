import { Router } from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getAllUsersController);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/", createUserController);

export default userRouter;
