const express = require("express");
const router = express.Router();
const jsondata = require("../jsondata");

router.get("/", (req, res) => {
  res.status(200).send("welcome to server");
});

router.get("/users", (req, res) => {
  res.status(200).json(jsondata);
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  jsondata.forEach((user) => {
    if (user.id == id) {
      res.status(200).json(user);
    }
  });
  res.status(404).json({ success: false, error: "user not found" });
});

module.exports = router;
