const express = require("express");
const router = express.Router();
const { readInfo, saveInfo, reset } = require("../controllers/manageInfo");

router.get("/readInfo", readInfo);
router.post("/saveInfo", saveInfo);
router.post("/reset", reset);

module.exports = router;
