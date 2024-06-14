import React, { useContext, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import { DataContext } from './testContext';


const App = ()=>{
  const [message , setMessage] = useState('سلام دوست من')
  const [timeList , setTimeList] = useState([])
  
  

  return(
    <DataContext.Provider value={{message , setMessage  , timeList ,setTimeList}}>

      <div className='container vh-100  d-flex align-items-center justify-content-center flex-column'>
        <div className='main w-75 d-flex align-items-center justify-content-center flex-column'>
          <Hello/>
          <Timer/>
        </div>
      </div>

    </DataContext.Provider>
    
  )
}


export default App;