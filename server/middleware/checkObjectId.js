const mongoose = require("mongoose");

function checkObjectId(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ errors: [{ msg: "Invalid object ID" }] });
  }
  next();
}

module.exports = checkObjectId;
