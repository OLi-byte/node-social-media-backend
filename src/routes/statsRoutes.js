import {
  createStatsController,
  updateStatsController,
} from "../controllers/statsController.js";
import { Router } from "express";

const statsRouter = Router();

statsRouter.post("/", createStatsController);
statsRouter.patch("/", createStatsController);

export default statsRouter;
