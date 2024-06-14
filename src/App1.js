import React, { useContext, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import { DataContext } from './testContext';
import TimeList from './TimeList';


const App = ()=>{
  const [message , setMessage] = useState('سلام دوست من')
  const [timeList , setTimeList] = useState(['00:02:01','00:03:40'])
  
  

  return(
    <DataContext.Provider value={{message , setMessage  , timeList ,setTimeList}}>

      <div className='container vh-100  d-flex align-items-center justify-content-center flex-column h-fit'>
        <div className='main bg-dark py-5 rounded-4  shadow-lg px-2 w-75 d-flex align-items-center justify-content-center flex-column'>
          <Hello/>
          <Timer/>
          <TimeList/>
        </div>
      </div>

    </DataContext.Provider>
    
  )
}


export default App;