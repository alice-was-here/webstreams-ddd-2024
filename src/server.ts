import express from "express";
import path from "node:path";

const app = express();
const port = 666;

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "/large.csv"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
