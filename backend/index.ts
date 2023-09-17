/** @format */
import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5050;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
