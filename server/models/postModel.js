const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  comments: [commentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", postSchema);
