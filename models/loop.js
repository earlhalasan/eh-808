const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loopSchema = new Schema({
  title: { type: String, required: true },
  noteCount: { type: Number, default: 16 },
  trackList: [
    {
      title: { type: String, default: "Kick" },
      soundFile: { type: String, default: "kick" },
      onNotes: [],
    },
    {
      title: { type: String, default: "Snare" },
      soundFile: { type: String, default: "snare" },
      onNotes: [],
    },
    {
      title: { type: String, default: "Open Hat" },
      soundFile: { type: String, default: "hh_open" },
      onNotes: [],
    },
    {
      title: { type: String, default: "Closed Hat" },
      soundFile: { type: String, default: "hh_closed" },
      onNotes: [],
    },
    {
      title: { type: String, default: "Tom" },
      soundFile: { type: String, default: "tom" },
      onNotes: [],
    },
  ],
});

module.exports = mongoose.model("Loop", loopSchema);
