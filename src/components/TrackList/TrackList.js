import React, { useContext, memo, useState } from "react";
import { Context } from "../../hooks/useStore";
import { soundFiles } from "../../constants/seed";
import Track from "../Track/Track";
import * as loopAPI from "../../utilities/loops-api";

const TrackList = ({ currentStepID, setUpdated, allLoops }) => {
  const {
    sequence: { trackList, noteCount },
  } = useContext(Context);
  console.log(Context);

  const [formData, setFormData] = useState({
    title: "",
    soundFile: "",
    onNotes: [],
  });
  let a = setUpdated();

  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(allLoops);
    // setAllLoops([...allLoops, formData]);

    loopAPI.newLoop(formData);
    setUpdated(!a);
    console.log(allLoops);
    setFormData({
      title: "",
      category: "",
      body: "",
    });
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedNote = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedNote);
    // console.log(formData);
  }

  const content = trackList.map((track, trackID) => {
    const { title, onNotes, soundFile } = track;
    const soundFilePath = soundFiles[soundFile];

    return (
      <>
        <Track
          key={title}
          trackID={+trackID}
          currentStepID={currentStepID}
          title={title}
          noteCount={noteCount}
          onNotes={onNotes}
          soundFilePath={soundFilePath}
        />
      </>
    );
  });

  return (
    <>
      <div className="track-list">{content}</div>
      <form action="">
        <input
          name="title"
          value={formData.title}
          type="text"
          placeholder="Title"
          onChange={handleChange}
          className=""
        />
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </>
  );
};

export default memo(TrackList);
