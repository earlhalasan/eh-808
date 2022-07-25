import React, { useContext, memo } from "react";
import { Context } from "../../hooks/useStore";
import { soundFiles } from "../../constants/config";
import Track from "../Track/Track";

const TrackList = ({ currentStepID }) => {
  const {
    sequence: { trackList, noteCount },
  } = useContext(Context);
  const content = trackList.map((track, trackID) => {
    const { title, onNotes, soundFile } = track;
    const soundFilePath = soundFiles[soundFile];

    return (
      <Track
        key={trackID}
        trackID={trackID}
        title={title}
        onNotes={onNotes}
        soundFilePath={soundFilePath}
        currentStepID={currentStepID}
      />
    );
  });

  return <div className="track-list">{content}</div>;
};

export default memo(TrackList);
