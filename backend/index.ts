/** @format */
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import apiRoutes from "./routes/api";
import path from "path";
import dotenv from "dotenv";
import { errorMessage } from "./utils/errorResponse";
import errorHandler from "./middleware/error";
const app = express();

dotenv.config({ path: "../.env" });

const port = process.env.PORT || 5050;

const isProduction =
  process.env.MODE && process.env.MODE.toLowerCase() === "production";

app.use(
  cors({
    origin: isProduction
      ? "https://imanibrown.onrender.com"
      : `http://localhost:3000`,
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.use("/api", apiRoutes);

if (isProduction) {
  app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to my server");
  });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
