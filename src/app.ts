import express, { Application } from "express";
import dotenv from "dotenv";
import { postRouter } from "./router/postrouter";
import { errorHandler } from "./middlewares/errorHandler";
dotenv.config();
const app: Application = express();
app.use(express.json());

app.use("/post", postRouter);
app.use(errorHandler);

app.listen(Number(process.env.PORT));
