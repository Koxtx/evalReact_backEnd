const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    sex: { type: String, required: true },
    avatar: { type: String, required: true },
    token: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
