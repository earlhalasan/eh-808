import React, { useRef, useLayoutEffect, memo } from "react";

const PlayHead = ({ notesWidth, timePerLoop, totalLapsedTime }) => {
  const Playhead = useRef(null);

  useLayoutEffect(() => {
    let progress = Math.min((totalLapsedTime % timePerLoop) / timePerLoop, 1);

    Playhead.current.style.transform =
      "translate3d(" + (progress * notesWidth).toFixed(2) + "px, 0, 0px)";
  }, [totalLapsedTime, timePerLoop, notesWidth]);

  return (
    <div className="play_head" ref={PlayHead}>
      {" "}
    </div>
  );
};

export default memo(PlayHead);
