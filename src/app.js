import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRoutes.js";
import likeRouter from "./routes/likeRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import friendRequestRouter from "./routes/friendRequestRoutes.js";
import friendshipRouter from "./routes/friendshipRoutes.js";
import verifyToken from "./middlewares/authMiddleware.js";
import statsRouter from "./routes/statsRoutes.js";

const app = express();

// Midlewares
app.use(json());
app.use(morgan("common"));
app.use(helmet());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", verifyToken, postRouter);
app.use("/api/v1/likes", verifyToken, likeRouter);
app.use("/api/v1/stats", verifyToken, statsRouter);
app.use("/api/v1/comments", verifyToken, commentRouter);
app.use("/api/v1/friendships", verifyToken, friendshipRouter);
app.use("/api/v1/friendRequests", verifyToken, friendRequestRouter);

export default app;
