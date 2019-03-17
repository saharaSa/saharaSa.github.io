const express = require("express");
const LocationController = require("../controllers/LocationController");

const router = express.Router();

router.get("/location/all",LocationController.listAllLocation)
router.post("/location",LocationController.createNewLocation);

module.exports = router;