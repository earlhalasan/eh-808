import { useState, useEffect, useCallback } from "react";
import Sound from "../utilities/Sound";

const useSound = (soundFilePath) => {
  const [sound, setSound] = useState({ play: () => {} });
  const play = useCallback(() => sound.play(), [sound]);

  useEffect(() => {
    setSound(new sound(soundFilePath));
  }, [soundFilePath]);

  return [play];
};

export default useSound;
