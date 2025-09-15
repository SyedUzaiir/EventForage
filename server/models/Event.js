const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: Date,
  type: { type: String, enum: ["hackathon", "conference", "competition", "webinar"], required: true },
  mode: { type: String, enum: ["virtual", "in_person", "hybrid"], default: "virtual" },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  skillsNeeded: [String],
  maxParticipants: Number
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
