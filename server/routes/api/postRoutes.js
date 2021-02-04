const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");
const { body } = require("express-validator");
const validator = require("../../middleware/validator");
const {
  createPost,
  getPostsByPage,
  getPostById,
  deletePostById,
  addComment,
} = require("../../controllers/postController");

// @route    POST api/posts
// @desc     Create a new post
// @access   Private
router.post("/", [auth, body("text", "Text is required"), validator], createPost);

// @route    GET api/posts
// @desc     Get posts by page
// @access   Private
router.get("/", auth, getPostsByPage);

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get("/:id", [auth, checkObjectId], getPostById);

// @route    DELETE api/posts/:id
// @desc     Delete post by ID
// @access   Private
router.delete("/:id", [auth, checkObjectId], deletePostById);

// @route    POST api/posts/comment/:id
// @desc     Comment on post
// @access   Private
router.post("/comment/:id", [auth, checkObjectId, body("text", "Text is required")], addComment);

module.exports = router;
