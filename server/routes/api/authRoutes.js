const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { body } = require("express-validator");
const validator = require("../../middleware/validator");
const { authenticateUser, getUserByToken } = require("../../controllers/authController");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, getUserByToken);

// @route    POST api/auth
// @desc     Authenticate user and get token
// @access   Public
router.post(
  "/",
  [
    body("email", "Email is invalid").isEmail(),
    body("password", "Password is required").notEmpty(),
    validator,
  ],
  authenticateUser
);

module.exports = router;
