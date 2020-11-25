const express = require("express");
const router = express.Router();
const { body, header } = require("express-validator");
const validator = require("../../middleware/validator");
const { authenticateUser } = require("../../controllers/authController");

// @route    POST api/users/auth
// @desc     Authenticate user and get token
// @access   Public
router.post(
  "/login",
  [
    body("email", "Email is invalid").isEmail(),
    body("password", "Password is required").notEmpty(),
    validator,
  ],
  authenticateUser
);

module.exports = router;
