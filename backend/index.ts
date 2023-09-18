/** @format */
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import apiRoutes from "./routes/api";
const app = express();

const port = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRoutes);



app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
  console.log(err)
  }
);

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
