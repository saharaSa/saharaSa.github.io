const express = require("express");
const Location = require("./LocationRoute");

const router = express.Router();

router.use("/api", Location);

module.exports = router;