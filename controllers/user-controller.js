const User = require("../models/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createTokenLogin = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "60s" });
};

const signupUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashPassWord = await bcrypt.hash(password, salt);
      const user = new User({
        username,
        password: hashPassWord,
      });
      console.log(User);
      await user.save();
      res.status(200).json({
        message: "Vous étes inscript",
      });
    } else {
      res.status(400).json({
        message: "Pseudo déjà utilisée",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log(user);
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = createTokenLogin(user._id);
        res.status(200).json({ user, token });
      } else {
        res.status(400).json({ message: "Mauvais username et/ou Password" });
      }
    } else {
      res.status(400).json({ message: "Mauvais username et/ou Password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
