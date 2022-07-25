import "./App.css";
import React, { useState, useEffect } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import useStyles from "../../hooks/useStyles";
import useTimer from "../../hooks/useTimer";
import ToolBar from "../../components/Toolbar/Toolbar";
import Steps from "../../components/Steps/Steps";
import PlayHead from "../../components/PlayHead/PlayHead";
import TrackList from "../../components/TrackList/TrackList";

export default function App() {
  const [user, setUser] = useState(getUser());

  const baseBPMPerOneSecond = 60;
  const stepsPerBar = 16;
  const beatsPerBar = 4;
  const barsPerLoop = 1;
  const totalSteps = stepsPerBar * barsPerLoop;
  const totalBeats = beatsPerBar * barsPerLoop;

  const [BPM, setBPM] = useState(100);
  const [startTime, setStartTime] = useState(null);
  const [pastLapsedTime, setPastLapsedTime] = useState(0);
  const [currentStep, setCurrentStep] = useState(null);
  const [getNotesWidth] = useStyles(totalSteps);

  const notesWidth = getNotesWidth(totalSteps);
  const timePerLoop = (baseBPMPerOneSecond / BPM) * 1000 * totalBeats;
  const timePerStep = timePerLoop / totalSteps;
  const isLoopPlaying = startTime !== null;
  const playerTime = useTimer(isLoopPlaying);
  const lapsedTime = isLoopPlaying ? Math.max(0, playerTime - startTime) : 0;
  const totalLapsedTime = pastLapsedTime + lapsedTime;

  useEffect(() => {
    if (isLoopPlaying) {
      setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps);
    } else {
      setCurrentStep(null);
    }
  }, [isLoopPlaying, totalLapsedTime, timePerStep, totalSteps]);

  const toolBarProps = {
    setStartTime,
    setPastLapsedTime,
    setBPM,
    isLoopPlaying,
    startTime,
    BPM,
  };

  const playHeadProps = {
    notesWidth,
    timePerLoop,
    totalLapsedTime,
  };

  const trackListProps = {
    currentStep,
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <div>
            <ToolBar {...toolBarProps} />
            <Steps count={totalSteps} />
            <div>
              <PlayHead {...playHeadProps} />
              <TrackList {...trackListProps} />
            </div>
          </div>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
