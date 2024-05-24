const mongoose = require("mongoose");
const videoSchema = require("../models/video.schem");
const Videos = mongoose.model("videos", videoSchema);

const insertvideo = async (req, res) => {
  console.log(req.body);
  try {
    const video = await Videos.create({
      videoUrl: req.body.video,
      titre: req.body.titre,
      user: req.body.user,
    });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllvideos = async (req, res) => {
  try {
    const allVideos = await Videos.find();
    res.status(200).json(allVideos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const toggleLike = async (req, res) => {
  //   const { videoUrl, account } = req.body;
  //   try {
  //     const video = await Videos.findOne({ videoUrl });
  //     const user = await User.findOne({ username: account });
  //     if (video.likesAccounts.includes(account)) {
  //       video.likesAccounts.splice(video.likesAccounts.indexOf(account), 1);
  //       user.likedVideos.splice(user.likedVideos.indexOf(video._id), 1);
  //     } else {
  //       video.likesAccounts.push(account);
  //       user.likedVideos.push(video._id);
  //     }
  //     await video.save();
  //     await user.save();
  //     res.status(200).json({ message: video });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
};

module.exports = {
  insertvideo,
  getAllvideos,
  toggleLike,
};
