const Profile = require("../models/profileModel");

async function getProfileById(req, res) {
  try {
    const profile = await Profile.findOne({ user: req.params.id }).populate({
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

async function getCurrentUsersProfile(req, res) {
  try {
    const profile = await Profile.findOne({ user: req.userId }).populate({
      path: "user",
      select: ["-password"],
    });

    if (!profile) {
      return res.status(404).json({ errors: [{ msg: "Profile not found" }] });
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function updateProfile(req, res) {
  const { description, location, gamertag, platform } = req.body;

  try {
    const query = { user: req.userId };
    const update = { description, location, gamertag, platform };
    const options = { new: true };

    const updatedProfile = await Profile.findOneAndUpdate(query, update, options).populate({
      path: "user",
      select: "-password",
    });

    if (!updatedProfile) {
      return res.status(404).json({ errors: [{ msg: "Profile does not exist" }] });
    }

    return res.status(200).json({ profile: updatedProfile });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = {
  getProfileById,
  getCurrentUsersProfile,
  updateProfile,
};
