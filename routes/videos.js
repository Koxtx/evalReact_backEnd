const {
  insertvideo,
  getAllvideos,
  toggleLike,
} = require("../controllers/videos-controller");

const router = require("express").Router();

router.post("/", insertvideo);
router.get("/", getAllvideos);
router.post("/likevideo", toggleLike);
module.exports = router;
