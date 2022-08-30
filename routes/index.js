var express = require("express");
var router = express.Router();

var d = new Date();

var datestring =
  d.getDate() +
  "-" +
  (d.getMonth() + 1) +
  "-" +
  d.getFullYear() +
  " " +
  d.getHours() +
  ":" +
  d.getMinutes();

const messages = [
  {
    text: "General Kenobi.",
    user: "General Grievous",
    added: datestring,
  },
  {
    text: "Hello there!",
    user: "Obi-Wan Kenobi",
    added: datestring,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

module.exports = router;
