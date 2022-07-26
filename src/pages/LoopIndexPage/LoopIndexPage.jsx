import { useState, useEffect, useRef } from "react";
import * as loopAPI from "../../utilities/loops-api";
import LoopList from "../../components/LoopList/LoopList";

export default function LoopIndexPage({
  allLoops,
  setAllLoops,
  updated,
  setUpdated,
}) {
  return (
    <>
      <h1>Loops Index</h1>
      <div className="">
        {allLoops ? (
          <LoopList allLoops={allLoops} setAllLoops={setAllLoops} />
        ) : (
          "loading"
        )}
      </div>
    </>
  );
}
