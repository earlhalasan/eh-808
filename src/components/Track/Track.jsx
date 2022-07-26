import React, { memo } from "react";
import useSound from "../../hooks/useSound";
import Note from "../Note/Note";
import "./Track.css";

const Track = ({
  trackID,
  currentStepID,
  title,
  noteCount,
  onNotes,
  soundFilePath,
}) => {
  const [play] = useSound(soundFilePath);

  const notes = [...Array(noteCount)].map((el, i) => {
    const isNoteOn = onNotes.indexOf(i) !== -1;
    const isNoteOnCurrentStep = currentStepID === i;
    const stepID = i;

    // Renders grid
    return (
      <Note
        key={i}
        trackID={trackID}
        stepID={stepID}
        isNoteOn={isNoteOn}
        isNoteOnCurrentStep={isNoteOnCurrentStep}
        play={play}
      />
    );
  });

  // Renders track name and grid
  return (
    <div className="track">
      <header className="track_title">{title}</header>
      <main className="track_notes">{notes}</main>
    </div>
  );
};

// in place of export default function
export default memo(Track);
