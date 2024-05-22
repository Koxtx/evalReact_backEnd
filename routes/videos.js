const { insertvideo, getAllvideos } = require("../controllers/videos-controller");

const router = require("express").Router();

router.post("/", insertvideo);
router.get("/", getAllvideos);

module.exports = router;
