import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Jenkins Pipeline Demo App!");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
