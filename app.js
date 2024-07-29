const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});



mongoose
  .connect(
    "mongodb+srv://kaporya:nikenike123@cluster0.5lrfscm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
