
import React from "react";
import { useState, useEffect } from "react";
export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  useEffect(() => {
    if (runs > 0) console.log("Good Job");
  }, [runs]);
  useEffect(() => {
    if (wickets > 0) console.log("Better Luck next time!");
  }, [wickets]);

  return (
    <div>
      <button onClick={() => setRuns(runs + 1)}>Runs ({runs})</button>
      <button onClick={() => setWickets(wickets + 1)}>
        Wickets ({wickets})
      </button>
    </div>
  );
}
