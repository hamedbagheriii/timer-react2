import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'


let interval;


class Timer extends React.Component {
  constructor(){
    super();

    this.state = {
      time : 10
    }
  }

  // this for set state and interval =>
  componentDidMount = ()=>{
    clearInterval(interval);
    interval = setInterval(() => {
        this.setState({
          time : --this.state.time
        })
    }, 1000);
  }
  
  // this for remove (interval == 0) =>
  componentDidUpdate = ()=>{
    if(this.state.time == 0){
      clearInterval(interval);

      this.setState({
        time : 10
      })
    }
  }

  // this for remove interval =>
  removeInerval =()=>{
    clearInterval(interval)
  }  


  
  render(){
    return(
      <>
        <h2 className='timer'>it is 00:00:{this.state.time}</h2>
        <div className='allBtn'>
          <button onClick={this.removeInerval} className='btn'>STOP</button>
          <button onClick={this.componentDidMount} className='btn'>START</button>
        </div>
      </>
    )
  }
}
  
  
export default Timer;