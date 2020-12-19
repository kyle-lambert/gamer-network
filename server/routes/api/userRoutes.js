const express = require("express");
const router = express.Router();
const validator = require("../../middleware/validator");
const auth = require("../../middleware/auth");
const { body } = require("express-validator");
const {
  registerUser,
  updateEmail,
  updatePassword,
  deleteUser,
} = require("../../controllers/userController");

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

// @route    PUT api/users/email
// @desc     Update users email
// @access   Private
router.put("/email", [auth, body("email", "Email is invalid").isEmail(), validator], updateEmail);

// @route    PUT api/users/password
// @desc     Update users password
// @access   Private
router.put(
  "/password",
  [
    auth,
    body("currentPassword", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
    body("newPassword", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
    validator,
  ],
  updatePassword
);

// @route    DELETE api/users/delete
// @desc     Delete user
// @access   Private
router.put(
  "/delete",
  [
    auth,
    body("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
    validator,
  ],
  deleteUser
);

module.exports = router;
