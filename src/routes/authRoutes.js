import { Router } from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);

export default authRouter;
