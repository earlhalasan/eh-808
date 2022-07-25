const sequenceList = [
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
    title: "Hotline Bling (65-75 BPM)",
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
];

const soundFiles = {
  kick: "/sounds/kick.wav",
  snare: "/sounds/snare.wav",
  hh_open: "/sounds/hh_open.wav",
  hh_closed: "/sounds/hh_closed.wav",
};

export { sequenceList, soundFiles };
