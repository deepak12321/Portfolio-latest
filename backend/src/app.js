import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";
const app = express();

// Router Configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));
// app.use(cookieParser());

import certificateRouter from "../routes/certificates.routes.js";
app.use("/certificates", certificateRouter);

import skillsRouter from "../routes/skills.routes.js";
app.use("/skills", skillsRouter);

app.get("/health", (request, response) => {
  response.status(200).json({
    statusCode: 200,
    message: "server is running normally",
  });
});

export default app;
