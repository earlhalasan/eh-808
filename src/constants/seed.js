const sequenceList = [
  {
    id: 0,
    title: "Drums",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 3, 6, 9, 12, 15],
      },
      {
        title: "808",
        soundFile: "bass",
        onNotes: [],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [],
      },
      {
        title: "Clap",
        soundFile: "clap",
        onNotes: [4, 12],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [],
      },
      {
        title: "Blip 1",
        soundFile: "blip1",
        onNotes: [],
      },
      {
        title: "Blip 2",
        soundFile: "blip2",
        onNotes: [],
      },
    ],
  },
  {
    id: 1,
    title: "Reggaeton",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 4, 8, 12],
      },
      {
        title: "808",
        soundFile: "bass",
        onNotes: [],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [3, 6, 11, 14],
      },
      {
        title: "Clap",
        soundFile: "clap",
        onNotes: [],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [],
      },
      {
        title: "Blip 1",
        soundFile: "blip1",
        onNotes: [],
      },
      {
        title: "Blip 2",
        soundFile: "blip2",
        onNotes: [],
      },
      {
        title: "Vox 1",
        soundFile: "vox1",
        onNotes: [],
      },
      {
        title: "Vox 2",
        soundFile: "vox2",
        onNotes: [],
      },
      {
        title: "Vox 3",
        soundFile: "vox3",
        onNotes: [],
      },
      {
        title: "Vox 4",
        soundFile: "vox4",
        onNotes: [],
      },
    ],
  },
  {
    id: 2,
    title: "Mustard",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 5, 8, 11, 13],
      },
      {
        title: "808",
        soundFile: "bass",
        onNotes: [],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [2, 6, 10, 14],
      },
      {
        title: "Clap",
        soundFile: "clap",
        onNotes: [],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [],
      },
      {
        title: "Piano 1",
        soundFile: "piano1",
        onNotes: [],
      },
      {
        title: "Piano 2",
        soundFile: "piano2",
        onNotes: [],
      },
      {
        title: "Piano 3",
        soundFile: "piano3",
        onNotes: [],
      },
      {
        title: "Piano 4",
        soundFile: "piano4",
        onNotes: [],
      },
      {
        title: "Piano 5",
        soundFile: "piano5",
        onNotes: [],
      },
    ],
  },
  {
    id: 3,
    title: "Full Kit",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 4, 8, 12],
      },
      {
        title: "808",
        soundFile: "bass",
        onNotes: [],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [],
      },
      {
        title: "Clap",
        soundFile: "clap",
        onNotes: [4, 12],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [],
      },
      {
        title: "Blip 1",
        soundFile: "blip1",
        onNotes: [],
      },
      {
        title: "Blip 2",
        soundFile: "blip2",
        onNotes: [],
      },
      {
        title: "Vox 1",
        soundFile: "vox1",
        onNotes: [],
      },
      {
        title: "Vox 2",
        soundFile: "vox2",
        onNotes: [],
      },
      {
        title: "Vox 3",
        soundFile: "vox3",
        onNotes: [],
      },
      {
        title: "Vox 4",
        soundFile: "vox4",
        onNotes: [],
      },
      {
        title: "Piano 1",
        soundFile: "piano1",
        onNotes: [],
      },
      {
        title: "Piano 2",
        soundFile: "piano2",
        onNotes: [],
      },
      {
        title: "Piano 3",
        soundFile: "piano3",
        onNotes: [],
      },
      {
        title: "Piano 4",
        soundFile: "piano4",
        onNotes: [],
      },
      {
        title: "Piano 5",
        soundFile: "piano5",
        onNotes: [],
      },
    ],
  },
];

const soundFiles = {
  kick: "/sounds/kick.wav",
  bass: "/sounds/808.wav",
  snare: "/sounds/snare.wav",
  clap: "/sounds/clap.wav",
  hh_closed: "/sounds/hat.wav",
  blip1: "/sounds/blip1.wav",
  blip2: "/sounds/blip2.wav",
  vox1: "/sounds/vox1.wav",
  vox2: "/sounds/vox2.wav",
  vox3: "/sounds/vox3.wav",
  vox4: "/sounds/vox4.wav",
  piano1: "/sounds/piano1.wav",
  piano2: "/sounds/piano2.wav",
  piano3: "/sounds/piano3.wav",
  piano4: "/sounds/piano4.wav",
  piano5: "/sounds/piano5.wav",
};

export { sequenceList, soundFiles };
