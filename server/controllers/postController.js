const User = require("../models/userModel");
const Post = require("../models/postModel");

async function getPostsByUserId(req, res) {
  try {
    const options = {
      limit: 10,
      populate: {
        path: "author comments.author",
        select: ["-email", "-password"],
      },
      sort: { createdAt: -1 },
    };

    const results = await Post.paginate({ author: req.params.id }, options);

    return res.status(200).json({ results });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function getPostsByPage(req, res) {
  const page = req.query.page ? Number.parseFloat(req.query.page) : 1;

  try {
    const options = {
      page,
      limit: 10,
      populate: {
        path: "author comments.author",
        select: ["-email", "-password"],
      },
      sort: { createdAt: -1 },
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

async function addPost(req, res) {
  const { text, image } = req.body;

  if (image) {
    console.log(image);
  }

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

async function deletePostById(req, res) {
  try {
    const deletedPost = await Post.findOneAndDelete({ _id: req.params.id, author: req.userId });

    if (!deletedPost) {
      return res
        .status(401)
        .json({ errors: [{ msg: "User not authorised or post does not exist" }] });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function addLike(req, res) {
  try {
    const user = await User.findById(req.userId).select(["-email, -password"]);
    const post = await Post.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (!post) {
      return res.status(404).json({ errors: [{ msg: "Post does not exist" }] });
    }

    if (post.likes.some((id) => id.toString() === user._id.toString())) {
      return res.status(400).json({ errors: [{ msg: "Post already liked" }] });
    }

    post.likes.push(user._id);

    const savedPost = await post.save();

    res.status(200).json({ likes: savedPost.likes });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function removeLike(req, res) {
  try {
    const user = await User.findById(req.userId).select(["-email, -password"]);
    const post = await Post.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (!post) {
      return res.status(404).json({ errors: [{ msg: "Post does not exist" }] });
    }
    if (!post.likes.includes(user._id)) {
      return res.status(400).json({ errors: [{ msg: "Post not liked" }] });
    }

    post.likes = post.likes.filter((id) => id.toString() !== user._id.toString());

    const savedPost = await post.save();

    res.status(200).json({ likes: savedPost.likes });
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

    const comment = post.comments.create({ author: user._id, text });

    post.comments.unshift(comment);

    await post.save();

    const populatedPost = await post
      .populate({
        path: "author",
        select: ["-email", "-password"],
      })
      .populate({
        path: "comments.author",
        select: ["-email", "-password"],
      })
      .execPopulate();

    res.status(200).json({ comments: populatedPost.comments });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function deleteComment(req, res) {
  try {
    const user = await User.findById(req.userId).select(["-email, -password"]);
    const post = await Post.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (!post) {
      return res.status(404).json({ errors: [{ msg: "Post does not exist" }] });
    }

    const comment = post.comments.id(req.params.comment_id);

    if (!comment) {
      return res.status(404).json({ errors: [{ msg: "Comment does not exist" }] });
    }

    if (comment.author._id.toString() !== user._id.toString()) {
      return res.status(401).json({ errors: [{ msg: "User not authorised" }] });
    }

    comment.remove();

    await post.save();

    const populatedPost = await post
      .populate({
        path: "comments.author",
        select: ["-email", "-password"],
      })
      .execPopulate();

    res.status(200).json({ comments: populatedPost.comments });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = {
  getPostsByPage,
  getPostsByUserId,
  addPost,
  deletePostById,
  addComment,
  deleteComment,
  addLike,
  removeLike,
};
