const express = require("express");
const router = express.Router();
const { createEvent, getEvents, joinEvent } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createEvent);
router.get("/", getEvents);
router.post("/join/:id", protect, joinEvent);

module.exports = router;
