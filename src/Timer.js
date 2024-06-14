import React, { useContext, useState } from "react";
import { DataContext } from "./testContext";

let interval;

const Timer = ()=>{
  const context = useContext(DataContext);
  const [hour , setHour] = useState(0);
  const [min , setMin] = useState(0);
  const [sec , setSec] = useState(0);
  const [active , setActive] = useState(false);

  const handelStartTimer = ()=>{
    if (active == false) {
      setActive(true);
      interval = setInterval(()=>{
        setSec(sec++)
        if(sec == 60){
          setMin(min++);
          setSec(0);
        }
        else if (min === 60){
          setMin(0);
          setHour(hour++);
        }
      },1000)
    }
  }
  



  const handelStopTimer = ()=>{
    clearInterval(interval);
    setActive(false);
  }
  

  

  return(
    
    <div className="timer w-100 bg-danger px-2 py-3 d-flex align-items-center justify-content-center flex-column">
      <div className="timer_show bg-white w-50">{`${ hour > 9 ? hour : '0'+hour}:${min > 9 ? min : '0'+min}:${
        sec > 9 ? sec : '0'+sec}`}</div>
      <div className="allBtn d-flex align-items-center justify-content-evenly w-75 mt-5">
        <button className="btn fw-bold" onClick={handelStopTimer}>PUSE</button>
        <button className="btn fw-bold" >RESET</button> 
        <button className="btn fw-bold" onClick={handelStartTimer}>START</button>
      </div>
    </div>
  )
}

export default Timer;