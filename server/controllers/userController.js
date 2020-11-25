const bcrypt = require("bcrypt");

function registerUser(req, res) {
  const { email } = req.body;
  console.log(email);
  res.json("register user");
}

module.exports = {
  registerUser,
};
