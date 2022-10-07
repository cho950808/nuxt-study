const router = require("express").Router();
const dao = require("./dao");

router.get("/", dao.list); // GET방식으로 접근 시 dao.list 모듈 실행
router.post("/", dao.add);

router.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: "board unknown uri ${req.path}" });
});

module.exports = router;
