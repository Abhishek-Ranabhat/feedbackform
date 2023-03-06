const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const filepath = path.join(__dirname + "/public");

//
const Feedback = require("./model");

//
app.use(express.static(filepath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(filepath + "/form.html");
});

app.post("/feedback", (req, res) => {
  const { name, email, feedback } = req.body;
  const newFeedback = new Feedback({
    name,
    email,
    feedback,
  });
  newFeedback.save();
  res.sendFile(filepath + "/submittedFeedBack.html");
});

app.get("/feedbacks", async (req, res) => {
  const newFeedback = await Feedback.find();
  res.send(newFeedback);
});
module.exports = app;
