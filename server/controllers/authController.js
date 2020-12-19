const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function authenticateUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = User.findOne({ email });

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const payload = user;

    jwt.sign(payload, process.env.JWT_SECRET, (error, token) => {
      if (error) {
        return res.status(500).json({ errors: [{ msg: "Unable to generate token" }] });
      }

      res.status(200).json({
        token,
        user,
      });
    });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = {
  authenticateUser,
};
