const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
  },
  gamertag: {
    type: String,
  },
  platform: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
