const Profile = require("../models/profileModel");

async function getProfileById(req, res) {
  const { params } = req;

  try {
    const profile = await Profile.findOne({ user: params.id }).populate({
      path: "user",
      select: ["-email", "-password"],
    });

    if (!profile) {
      return res.status(404).json({ errors: [{ msg: "Profile not found" }] });
    }

    res.status(200).json({ profile });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = {
  getProfileById,
};
