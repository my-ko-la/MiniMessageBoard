var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Obi-Wan Kenobi",
    added: new Date(),
  },
  {
    text: "General Kenobi!",
    user: "General Grievous",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

module.exports = router;
