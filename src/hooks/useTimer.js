import { useState, useLayoutEffect } from "react";

// uses request animation frame to visualize bpm along steps
const useTimer = (running) => {
  const [now, setNow] = useState(null);

  useLayoutEffect(() => {
    if (!running) {
      return;
    }

    const id = requestAnimationFrame(() => setNow(performance.now()));

    return () => cancelAnimationFrame(id);
  }, [running, now]);

  return running ? now : null;
};

export default useTimer;
