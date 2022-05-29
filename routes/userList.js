const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", (req, res) => {
  User.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
    });
});

module.exports = router;
