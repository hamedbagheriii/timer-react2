import React, { useContext, useState } from "react";
import { DataContext } from "./testContext";

let interval;
const Timer = () => {
  const context = useContext(DataContext);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [active, setActive] = useState(false);

  const handleStartTimer = () => {
    if (active === false) {
      setActive(true);
      interval = setInterval(() => {
        setSec((prevSec) => {
          let newSec = prevSec + 1;
          if (newSec === 60) {
            setMin((prevMin) => {
              let newMin = prevMin + 1;
              if (newMin === 60) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              }
              return newMin;
            });
            return 0;
          }
          return newSec;
        });
      }, 1000);
    }
  };

  const handleStopTimer = () => {
    clearInterval(interval);
    setActive(false);
  };
  const handleResetTimer = () => {
    clearInterval(interval);
    setHour(0);
    setMin(0);
    setSec(0);
    setActive(false);
  };

  return (
    <div className="timer w-100 px-2 py-3 d-flex align-items-center justify-content-center flex-column">
      {" "}
      <div className="timer_show text-center fs-1 w-50">
        {`${hour > 9 ? hour : "0" + hour}:${min > 9 ? min : "0" + min}:${
          sec > 9 ? sec : "0" + sec
        }`}
      </div>
      <div className="allBtn d-flex align-items-center justify-content-evenly w-75">
        <button className="btn fw-bold" onClick={handleStopTimer}>
          PAUSE
        </button>
        <button className="btn fw-bold" onClick={handleResetTimer}>
          RESET
        </button>
        <button className="btn fw-bold" onClick={handleStartTimer}>
          START
        </button>
      </div>
    </div>
  );
};

export default Timer;
