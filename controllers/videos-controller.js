const mongoose = require("mongoose");
const videoSchema = require("../models/video.schem");
const Videos = mongoose.model("videos", videoSchema);

const insertvideo = async (req, res) => {
  try {
    const video = await Videos.create({
      videoUrl: req.body.video,
      titre: req.body.titre,
      user: req.user._id, // Attach user ID from JWT
    });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllvideos = async (req, res) => {
  try {
    const allVideos = await Videos.find({}).populate("user", "username avatar"); // Populate user details
    res.status(200).json(allVideos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const likeVideo = async (req, res) => {
  const videoId = req.params.id;
  try {
    const video = await Videos.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Increment the like count
    video.likes += 1;
    await video.save();

    res.status(200).json({ message: "Video liked successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const dislikeVideo = async (req, res) => {
  const videoId = req.params.id;
  try {
    const video = await Videos.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Increment the dislike count
    video.dislikes += 1;
    await video.save();

    res.status(200).json({ message: "Video disliked successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { insertvideo, getAllvideos, likeVideo, dislikeVideo };
