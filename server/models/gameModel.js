const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  gameId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Game", gameSchema);
