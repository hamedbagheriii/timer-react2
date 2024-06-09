import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'


let interval;
let x=10;


class Timer extends React.Component {
  constructor(){
    super();

    this.state = {
      time : x
    }
  }


  componentDidMount(){
      interval = setInterval(() => {
        //! من بعد انجام این تمرین ویدیو بعدش رو دیدم و دیدم
        //! استفاده از خود استیت منطقی تره ولی خب موقع زدن هرچی فکر کردم نفهمیدم 
        //! چطور بهش اشاره کنم چون معنی ست استیت رو چیزدیگه فهمیده بودم =>
          this.setState({
            time : --x
          })
      }, 1000);
    }
    
    
    componentDidUpdate(){
      if(this.state.time == 0){
          clearInterval(interval);
      }
  }



  
  render(){
    return(
      <h2 className='timer'>it is 00:00:{this.state.time}</h2>
    )
  }
}
  
  
export default Timer;