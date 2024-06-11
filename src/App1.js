// ! چند ریکت هوک را فراخانی میکنیم =>
import React , {useState , useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import Timer from './Timer';
import './style.css'
import TimeList from './TimeList';
import { TestContext } from './testContext';





  const App = ()=>{
    const [title , setTitle] = useState("سلام دوست عزیزم");
    const [isLight , setisLight] = useState(false);
    const [timeArr , setTimeArr] = useState(['00:05:12','00:04:12']);




    useEffect(()=>{
      return()=>{
        console.log("use");
      }
    },[isLight])



    const handelisLight =()=>{
      setisLight(!isLight)
    }




      
    return(
      //! object literal : زمانی که میخواهی در ابجت مقداری قراربدهی میتونی فقط اسم متفیر را 
        // صدا بزنی تا همگان با همون اسم یک مقدار برات بسازه =>
      <TestContext.Provider value={{timeArr , setTimeArr}}>

      <div className='main' style={{background : isLight ? 'white' : 'black'}}>
        <Hello title={title} />
        {/* prop diling : ارسال دیتا به صورت اتریبیوت که بهترین روش هست */}
        <Timer
        handelisLight={handelisLight} 
        isLight={isLight}
        setTimeArr={setTimeArr} />
        {/* اشاره به کانتکست =>>> */}
        <TimeList/>
      </div>

      </TestContext.Provider>
      )

  }








export default App;