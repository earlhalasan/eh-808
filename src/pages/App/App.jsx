import "./App.css";
import React, { useState, useEffect, useReducer, createContext } from "react";
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
import { Provider, Context } from "../../hooks/useStore";
import LoopIndexPage from "../LoopIndexPage/LoopIndexPage";
import GenreIndexPage from "../GenreIndexPage/GenreIndexPage";
import * as loopAPI from "../../utilities/loops-api";
import { sequenceList } from "../../constants/seed";

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
  const [BPM, setBPM] = useState(90);
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
  const [selectedLoop, setSelectedLoop] = useState(null);

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
        console.log(loops, "loops");
        setAllLoops(loops);

        console.log(allLoops, "allLoops");
      }
      getLoops();
    },
    [updated]
  );

  // ATTEMPT TO REFACTOR
  // const Context = createContext({
  //   sequence: {},
  //   toggleNote: () => {},
  //   selectSequence: () => {},
  // });

  // const appReducer = (state, action) => {
  //   switch (action.type) {
  //     case "SET_SEQUENCE":
  //       return {
  //         ...sequenceList.find((seq) => seq.id === action.value),
  //       };
  //     case "SET_ON_NOTES":
  //       let newTrackList = state.trackList.map((track, trackID) => {
  //         if (action.trackID === trackID) {
  //           return {
  //             ...track,
  //             onNotes: action.value,
  //           };
  //         } else {
  //           return track;
  //         }
  //       });
  //       return {
  //         ...state,
  //         trackList: newTrackList,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  // const Provider = ({ children }) => {
  //   const [sequence, dispatch] = useReducer(appReducer, { ...sequenceList[0] });

  //   const toggleNote = ({ trackID, stepID }) => {
  //     let newOnNotes;
  //     const onNotes = sequence.trackList[trackID].onNotes;

  //     if (onNotes.indexOf(stepID) === -1) {
  //       newOnNotes = [...onNotes, stepID];
  //     } else {
  //       newOnNotes = onNotes.filter((col) => col !== stepID);
  //     }
  //     dispatch({
  //       type: "SET_ON_NOTES",
  //       value: newOnNotes,
  //       trackID,
  //     });
  //   };

  //   const selectSequence = (sequenceID) => {
  //     dispatch({
  //       type: "SET_SEQUENCE",
  //       value: sequenceID,
  //     });
  //   };

  //   return (
  //     <Context.Provider value={{ sequence, toggleNote, selectSequence }}>
  //       {children}
  //     </Context.Provider>
  //   );
  // };
  // END REFACTOR ATTEMPT

  function loopFinder(a) {
    let r = allLoops.filter((loop) => loop._id === a);
    console.log(allLoops);
    console.log(r);
    console.log(r[0].title);
    return r[0].title;
  }

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
                <ToolBar
                  {...toolBarProps}
                  setAllLoops={setAllLoops}
                  setSelectedLoop={setSelectedLoop}
                />
              </header>
              <Steps count={totalSteps} />
              <div className="app_content">
                {/* <PlayHead {...playHeadProps} /> */}
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

// export { Provider, Context };
