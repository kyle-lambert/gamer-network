const express = require("express");
const router = express.Router();
const validator = require("../../middleware/validator");
const { body } = require("express-validator");
const { registerUser } = require("../../controllers/userController");

// @route    POST api/users/register
// @desc     Register user
// @access   Public
router.post(
  "/register",
  [
    body("firstName", "First name is required").notEmpty(),
    body("lastName", "Last name is required").notEmpty(),
    body("email", "Email is invalid").isEmail(),
    body("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
    validator,
  ],
  registerUser
);

module.exports = router;
