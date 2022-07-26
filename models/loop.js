const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loopSchema = new Schema({
  title: { type: String, required: true },
  noteCount: Number,
  trackList: [
    {
      title: String,
      soundFile: String,
      onNotes: [],
    },
    {
      title: String,
      soundFile: String,
      onNotes: [],
    },
    {
      title: String,
      soundFile: String,
      onNotes: [],
    },
    {
      title: String,
      soundFile: String,
      onNotes: [],
    },
    {
      title: String,
      soundFile: String,
      onNotes: [],
    },
  ],
});

module.exports = mongoose.model("Loop", loopSchema);
