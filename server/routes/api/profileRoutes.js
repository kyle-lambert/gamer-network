const express = require("express");
const router = express.Router();
const checkObjectId = require("../../middleware/checkObjectId");
const auth = require("../../middleware/auth");

const {
  getProfileById,
  getCurrentUsersProfile,
  updateProfile,
} = require("../../controllers/profileController");

// @route    GET api/profile/:id
// @desc     Get user profile by ID
// @access   Public
router.get("/:id", checkObjectId, getProfileById);

// @route    GET api/profile
// @desc     Get current users profile
// @access   Private
router.get("/", auth, getCurrentUsersProfile);

// @route    PUT api/profile
// @desc     Update my profile
// @access   Private
router.put("/", [auth], updateProfile);

module.exports = router;
