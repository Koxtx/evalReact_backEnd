const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    videoUrl: {
      type: String,
      required: true,
    },
    titre: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    likes: {
      type: Array,
    },
    dislikes: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = videoSchema;
