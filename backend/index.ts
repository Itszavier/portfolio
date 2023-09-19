/** @format */
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import apiRoutes from "./routes/api";
import path from "path";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRoutes);

if (process.env.MODE === "Production") {
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to my server");
  });
}

app.use((err: any, req: express.Request, res: express.Response) => {
  if (err.code) {
    res.status(err.code).json({
      success: false,
      message: err.message,
      code: err.code,
      error: err,
    });
  } else {
    res.status(500).json({
      success: false,
      message: err.message,
      code: 500,
      error: err,
    });
  }
});

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
