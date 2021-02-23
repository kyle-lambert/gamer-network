const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");
const { body } = require("express-validator");
const validator = require("../../middleware/validator");
const {
  getPostsByPage,
  addPost,
  deletePostById,
  addComment,
  deleteComment,
  addLike,
  removeLike,
} = require("../../controllers/postController");

// @route    POST api/posts
// @desc     Add a post
// @access   Private
router.post("/", [auth, body("text", "Text is required").notEmpty(), validator], addPost);

// @route    DELETE api/posts/:id
// @desc     Delete post by post ID
// @access   Private
router.delete("/:id", [auth, checkObjectId], deletePostById);

// @route    GET api/posts
// @desc     Get posts by page
// @access   Private
router.get("/", auth, getPostsByPage);

// @route    POST api/posts/comment/:id
// @desc     Add a comment
// @access   Private
router.post(
  "/comment/:id",
  [auth, checkObjectId, body("text", "Text is required").notEmpty()],
  addComment
);

// @route    DELETE api/posts/comment/:id/:comment_id
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
