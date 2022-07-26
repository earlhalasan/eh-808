import "./App.css";
import React, { useState, useEffect } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import useStyles from "../../hooks/useStyles";
import useTimer from "../../hooks/useTimer";
import ToolBar from "../../components/Toolbar/Toolbar";
import Steps from "../../components/Steps/Steps";
import PlayHead from "../../components/PlayHead/PlayHead";
import TrackList from "../../components/TrackList/TrackList";
import { Provider } from "../../hooks/useStore";
import LoopIndexPage from "../LoopIndexPage/LoopIndexPage";
import GenreIndexPage from "../GenreIndexPage/GenreIndexPage";
import * as loopAPI from "../../utilities/loops-api";

export default function App() {
  const [user, setUser] = useState(getUser());

  // BPM set up
  const baseBPMPerOneSecond = 60;
  const stepsPerBar = 16;
  const beatsPerBar = 4;
  const barsPerSequence = 1;
  const totalSteps = stepsPerBar * barsPerSequence;
  const totalBeats = beatsPerBar * barsPerSequence;

  // Hooks for drum machine
  const [BPM, setBPM] = useState(120);
  const [startTime, setStartTime] = useState(null);
  const [pastLapsedTime, setPastLapse] = useState(0);
  const [currentStepID, setCurrentStep] = useState(null);
  const [getNotesAreaWidthInPixels] = useStyles(totalSteps);

  const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps);
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
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (isSequencePlaying) {
      setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps);
    } else {
      setCurrentStep(null);
    }
  }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps]);

  // get loops
  useEffect(
    function () {
      async function getLoops() {
        const loops = await loopAPI.getAll();
        // console.log(loops);
        setAllLoops(loops);

        console.log(allLoops);
      }
      getLoops();
    },
    [updated]
  );

  const toolBarProps = {
    setStartTime,
    setPastLapse,
    setBPM,
    isSequencePlaying,
    startTime,
    BPM,
  };

  const playHeadProps = {
    notesAreaWidthInPixels,
    timePerSequence,
    totalLapsedTime,
  };

  const trackListProps = {
    currentStepID,
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Provider>
            <main className="app">
              <header className="app_header">
                <h1 className="app_title">EH-808</h1>
                <ToolBar {...toolBarProps} />
              </header>
              <Steps count={totalSteps} />
              <div className="app_content">
                {/* <PlayHead {...playHeadProps} /> */}
                <TrackList {...trackListProps} />
              </div>
            </main>
          </Provider>
          <Routes>
            {/* <Route path="/loops" element={<LoopIndexPage />} /> */}
            {allLoops ? (
              <Route
                path="/loops"
                element={
                  <LoopIndexPage
                    allLoops={allLoops}
                    setAllLoops={setAllLoops}
                    updated={updated}
                    setUpdated={setUpdated}
                  />
                }
              />
            ) : (
              "loading"
            )}
            <Route path="/genres" element={<GenreIndexPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
