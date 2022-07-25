const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loopSchema = new Schema({
  title: { type: String, required: true },
  noteCount: Number,
  trackList: [
    {
      title: "Kick",
      soundFile: "kick",
      onNotes: [],
    },
    {
      title: "Snare",
      soundFile: "snare",
      onNotes: [],
    },
    {
      title: "Open Hat",
      soundFile: "hh_open",
      onNotes: [],
    },
    {
      title: "Closed Hat",
      soundFile: "hh_closed",
      onNotes: [],
    },
    {
      title: "Tom",
      soundFile: "tom",
      onNotes: [],
    },
  ],
});

module.exports = mongoose.model("Loop", loopSchema);
