const express = require("express");
const router = express.Router();
const checkObjectId = require("../../middleware/checkObjectId");

const { getProfileById } = require("../../controllers/profileController");

// @route    GET api/profile/:id
// @desc     Get user profile by ID
// @access   Public
router.get("/:id", checkObjectId, getProfileById);

module.exports = router;
