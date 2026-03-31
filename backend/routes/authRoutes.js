const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(400).json("User not found");

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch) return res.status(400).json("Wrong password");

  res.json("Login success");
});

module.exports = router;