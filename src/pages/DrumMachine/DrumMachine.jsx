import React, { useState, useEffect } from "react";
import { Provider } from "../../hooks/useStore";
import ToolBar from "../../components/Toolbar/Toolbar";
import Steps from "../../components/Steps/Steps";
import TrackList from "../../components/TrackList/TrackList";
import useStyles from "../../hooks/useStyles";
import useTimer from "../../hooks/useTimer";

export default function DrumMachinePage() {
  // BPM set up
  const baseBPMPerOneSecond = 60;
  const stepsPerBar = 16;
  const beatsPerBar = 4;
  const barsPerSequence = 1;
  const totalSteps = stepsPerBar * barsPerSequence;
  const totalBeats = beatsPerBar * barsPerSequence;

  // Hooks for drum machine
  const [BPM, setBPM] = useState(90);
  const [startTime, setStartTime] = useState(null);
  const [pastLapsedTime, setPastLapse] = useState(0);
  const [currentStepID, setCurrentStep] = useState(null);
  const [getNotesAreaWidthInPixels] = useStyles(totalSteps);

  getNotesAreaWidthInPixels(totalSteps);
  const timePerSequence = (baseBPMPerOneSecond / BPM) * 1000 * totalBeats;
  const timePerStep = timePerSequence / totalSteps;
  const isSequencePlaying = startTime !== null;
  const playerTime = useTimer(isSequencePlaying);
  const lapsedTime = isSequencePlaying
    ? Math.max(0, playerTime - startTime)
    : 0;
  const totalLapsedTime = pastLapsedTime + lapsedTime;

  // Hooks for loop
  const [allLoops, setAllLoops] = useState([]);
  const [, setUpdated] = useState(false);
  const [, setSelectedLoop] = useState(null);

  useEffect(() => {
    if (isSequencePlaying) {
      setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps);
    } else {
      setCurrentStep(null);
    }
  }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps]);

  const trackListProps = {
    currentStepID,
  };

  const toolBarProps = {
    setStartTime,
    setPastLapse,
    setBPM,
    isSequencePlaying,
    startTime,
    BPM,
    allLoops,
    setAllLoops,
  };

  return (
    <Provider>
      <main className="app">
        <header className="app_header">
          <h1 className="app_title">EH-808</h1>
          <ToolBar
            {...toolBarProps}
            setAllLoops={setAllLoops}
            setSelectedLoop={setSelectedLoop}
          />
        </header>
        <Steps count={totalSteps} />
        <div className="app_content">
          <TrackList
            {...trackListProps}
            setUpdated={setUpdated}
            allLoops={allLoops}
            setAllLoops={setAllLoops}
            setSelectedLoop={setSelectedLoop}
          />
        </div>
      </main>
    </Provider>
  );
}
