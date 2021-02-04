const User = require("../models/userModel");
const Post = require("../models/postModel");

async function createPost(req, res) {
  const { text } = req.body;

  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }

    const post = new Post({
      author: user._id,
      text,
    });

    await post.save();

    const populatedPost = await post
      .populate({
        path: "author",
        select: ["-email", "-password"],
      })
      .execPopulate();

    return res.status(200).json({ post: populatedPost });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function getPostsByPage(req, res) {
  try {
    const options = {
      page: 1,
      limit: 10,
      populate: {
        path: "author",
        select: ["-email", "-password"],
      },
    };

    const results = await Post.paginate({}, options);

    if (!results) {
      return res.status(404).json({ errors: [{ msg: "No posts exist" }] });
    }

    return res.status(200).json({ results });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function addComment(req, res) {
  const { text } = req.body;
  try {
    const user = await User.findById(req.userId).select(["-email, -password"]);
    const post = await Post.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (!post) {
      return res.status(404).json({ errors: [{ msg: "Post does not exist" }] });
    }
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ errors: [{ msg: "Post does not exist" }] });
    }

    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function deletePostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ errors: [{ msg: "Post does not exist" }] });
    }

    if (post.author.toString() !== req.userId) {
      return res.status(401).json({ errors: [{ msg: "User not authorised" }] });
    }

    const deletedPost = await post.remove();

    return res.status(200).json({ deletedPost });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = {
  createPost,
  getPostsByPage,
  getPostById,
  deletePostById,
  addComment,
};
