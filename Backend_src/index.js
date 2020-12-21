var express = require("express");
var router = express.Router();

var users = [
  { email: "srbhroy5@gmail.com", password: "123" },
  { email: "helloworld@nettantra.com", password: "123" },
  { email: "xyz@outlook.com", password: "456" },
];

router.get("/", function (req, res, next) {
  res.send("Welcome to backend server");
});

router.post("/login", function (req, res) {
  let result = users.find((users) => users.email == req.body.email);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: "Successfull login.",
      });
      //res.redirect("localhost:3001/home");
    } else {
      res.status(200).send({
        message: "Password incorrect.",
      });
    }
  } else {
    res.status(200).send({
      message: "User not found.",
    });
  }
});

module.exports = router;
