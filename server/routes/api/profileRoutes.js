const express = require("express");
const router = express.Router();

const { getProfileById } = require("../../controllers/profileController");

// @route    GET api/profile/:id
// @desc     Get user profile by ID
// @access   Public
router.get("/:id", getProfileById);

module.exports = router;
