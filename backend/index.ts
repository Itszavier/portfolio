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
  app.use(express.static(path.resolve(__dirname, "./frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to my server");
  });
}

app.use((err: any, req: express.Request, res: express.Response, next: any) => {
  if (err.statusCode) {
    res.status(err.code).json({
      success: false,
      message: err.message,
      code: err.statusCode,
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
