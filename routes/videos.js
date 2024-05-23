const {
  insertvideo,
  getAllvideos,
} = require("../controllers/videos-controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", authMiddleware, insertvideo);
router.get("/", getAllvideos);

module.exports = router;
