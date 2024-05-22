const mongoose = require("mongoose");
const videoSchema = require("../models/video.schem");
const Videos = mongoose.model("videos", videoSchema);

const insertvideo = async (req, res) => {
  console.log(req.body);

  try {
    const video = await Videos.create({
      videoUrl: req.body.video,
    });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllvideos = async (req, res) => {
  try {
    const allVideos = await Videos.find({});
    res.status(200).json(allVideos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { insertvideo, getAllvideos };
