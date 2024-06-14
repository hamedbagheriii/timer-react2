import React, { useContext } from "react";
import { DataContext } from "./testContext";



const Hello = ()=>{
  const context = useContext(DataContext);

  return(
    <h4 className="w-75 title text-center pt-2 pb-3 rounded-5">
      {context.message}
    </h4>
  )
}

export default Hello;