import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRoutes.js";
import likeRouter from "./routes/likeRoutes.js";
import verifyToken from "./middlewares/authMiddleware.js";

const app = express();

// Midlewares
app.use(json());
app.use(morgan("common"));
app.use(helmet());

// Routes
app.use("/api/v1/users", verifyToken, userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", verifyToken, postRouter);
app.use("/api/v1/likes", verifyToken, likeRouter);

export default app;
