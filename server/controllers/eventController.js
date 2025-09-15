const Event = require("../models/Event");

// Create Event
const createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, organizer: req.user._id });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("organizer", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Join Event
const joinEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.participants.includes(req.user._id)) {
      return res.status(400).json({ message: "Already joined" });
    }

    event.participants.push(req.user._id);
    await event.save();

    res.json({ message: "Joined successfully", event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createEvent, getEvents, joinEvent };
