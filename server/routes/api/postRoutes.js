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
  deleteComment,
  addLike,
  removeLike,
} = require("../../controllers/postController");

// @route    POST api/posts
// @desc     Create a new post
// @access   Private
router.post("/", [auth, body("text", "Text is required").notEmpty(), validator], createPost);

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
router.post(
  "/comment/:id",
  [auth, checkObjectId, body("text", "Text is required").notEmpty()],
  addComment
);

// @route    POST api/posts/comment/:id
// @desc     Delete a comment
// @access   Private
router.delete("/comment/:id/:comment_id", [auth, checkObjectId], deleteComment);

// @route    POST api/posts/like/:id
// @desc     Like a post
// @access   Private
router.post("/like/:id", [auth, checkObjectId], addLike);

// @route    POST api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
router.post("/unlike/:id", [auth, checkObjectId], removeLike);

module.exports = router;
