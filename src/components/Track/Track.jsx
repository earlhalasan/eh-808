import React, { memo } from "react";
import useSound from "../../hooks/useSound";
import Note from "../Note/Note";

const Track = ({
  trackID,
  currentStepID,
  title,
  onNotes,
  soundFilePath,
  noteCount,
}) => {
  const [play] = useSound(soundFilePath);

  const notes = [...Array(noteCount)].map((el, i) => {
    const isNoteOn = onNotes.indexOf(i) !== -1;
    const isNoteOnCurrentStep = currentStepID === i;
    const stepID = i;

    return (
      <Note
        trackID={trackID}
        key={i}
        stepID={stepID}
        isNoteOn={isNoteOn}
        isNoteOnCurrentStep={isNoteOnCurrentStep}
        play={play}
      />
    );
  });

  return (
    <div className="track">
      <header className="track-header">{title}</header>
      <main className="track_notes">{notes}</main>
    </div>
  );
};

export default memo(Track);
