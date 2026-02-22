const express = require("express");
const router = express.Router();
const { polishText } = require("../controllers/aiController");

router.post("/polishText", polishText);

module.exports = router;
