const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Profile = require("../models/profileModel");
const Review = require("../models/reviewModel");

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: "Email is already taken" }] });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;

    const newUser = await user.save();

    const profile = new Profile({
      user: newUser._id,
      fullName: `${firstName} ${lastName}`,
    });

    const newProfile = await profile.save();

    res.status(200).json({ user: newUser, profile: newProfile });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function updateEmail(req, res) {
  const { email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { email }, { new: true });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function updatePassword(req, res) {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = newHashedPassword;

    const updatedUser = await user.save();

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

async function deleteUser(req, res) {
  const { password } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User does not exist" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    await User.findByIdAndDelete(req.user._id);
    await Profile.findOneAndDelete({ user: req.user._id });
    await Review.findOneAndDelete({ author: req.user._id });

    res.status(200).json({ msg: "User account, profile and reviews deleted" });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = {
  registerUser,
  updateEmail,
  updatePassword,
  deleteUser,
};
