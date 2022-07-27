require("dotenv").config();
require("./config/database");

const Loop = require("./models/loop");

(async function () {
  await Loop.deleteMany({});
  const loops = await Loop.create([
    {
      id: 0,
      title: "House (120-128 BPM)",
      noteCount: 16,
      trackList: [
        {
          title: "Kick",
          soundFile: "kick",
          onNotes: [0, 4, 8, 12],
        },
        {
          title: "Snare",
          soundFile: "snare",
          onNotes: [4, 12],
        },
        {
          title: "Open Hat",
          soundFile: "hh_open",
          onNotes: [],
        },
        {
          title: "Closed Hat",
          soundFile: "hh_closed",
          onNotes: [2, 6, 10, 14],
        },
        {
          title: "Tom",
          soundFile: "tom",
          onNotes: [],
        },
      ],
    },
    {
      id: 1,
      title: "Reggaeton (90-98 BPM)",
      noteCount: 16,
      trackList: [
        {
          title: "Kick",
          soundFile: "kick",
          onNotes: [0, 4, 8, 12],
        },
        {
          title: "Snare",
          soundFile: "snare",
          onNotes: [3, 6, 9, 11, 14],
        },
        {
          title: "Open Hat",
          soundFile: "hh_open",
          onNotes: [],
        },
        {
          title: "Closed Hat",
          soundFile: "hh_closed",
          onNotes: [0, 2, 4, 6, 7, 10, 12, 14],
        },
        {
          title: "Tom",
          soundFile: "tom",
          onNotes: [],
        },
      ],
    },
    {
      id: 2,
      title: "Hip-Hop (65-75 BPM)",
      noteCount: 16,
      trackList: [
        {
          title: "Kick",
          soundFile: "kick",
          onNotes: [0, 2, 7, 9, 10, 13, 15],
        },
        {
          title: "Snare",
          soundFile: "snare",
          onNotes: [4, 12],
        },
        {
          title: "Open Hat",
          soundFile: "hh_open",
          onNotes: [],
        },
        {
          title: "Closed Hat",
          soundFile: "hh_closed",
          onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
        },
        {
          title: "Tom",
          soundFile: "tom",
          onNotes: [],
        },
      ],
    },
    {
      id: 3,
      title: "Drum and Bass (88-90 BPM)",
      noteCount: 16,
      trackList: [
        {
          title: "Kick",
          soundFile: "kick",
          onNotes: [0, 5, 9, 11, 13],
        },
        {
          title: "Snare",
          soundFile: "snare",
          onNotes: [2, 6, 10, 14],
        },
        {
          title: "Open Hat",
          soundFile: "hh_open",
          onNotes: [],
        },
        {
          title: "Closed Hat",
          soundFile: "hh_closed",
          onNotes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          title: "Tom",
          soundFile: "tom",
          onNotes: [],
        },
      ],
    },
    {
      id: 4,
      title: "4 on the floor",
      noteCount: 16,
      trackList: [
        {
          title: "Kick",
          soundFile: "kick",
          onNotes: [0, 4, 8, 12],
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
    },
  ]);

  process.exit();
})();
