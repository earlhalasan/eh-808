import "./App.css";
import React, { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import DrumMachinePage from "../DrumMachine/DrumMachine";

export default function App() {
  const [user, setUser] = useState(getUser());

  // get loops
  // useEffect(
  //   function () {
  //     async function getLoops() {
  //       const loops = await loopAPI.getAll();
  //       console.log(loops, "loops");
  //       setAllLoops(loops);

  //       console.log(allLoops, "allLoops");
  //     }
  //     getLoops();
  //   },
  //   [updated]
  // );

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
            />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
            <Route path="/drummachine" element={<DrumMachinePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

{
  /* <Route path="/loops" element={<LoopIndexPage />} /> */
}
{
  /* {allLoops ? (
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
            )} */
}
{
  /* <Route path="/genres" element={<GenreIndexPage />} /> */
}

{
  /* <Provider>
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
          </Provider> */
}
