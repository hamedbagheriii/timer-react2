import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'
import TimeList from './TimeList';
import { TestContext } from './testContext';


let interval;


class Timer extends React.Component {
  constructor(){
    super();

    this.state = {
      hour:0,
      minute:0,
      second:0,
      isStart:false
    }
  }

  // استغاده از کانتکست درون کامپوننت کلاسی =>
    // ! static : به متدهای میگ که شما نیاز نیست از یک کلاس ، شی بوجود بیارید تا بهش دسترسی پیدا کنید
    // ! بلکه مستقیم اسم کلاش رو صدا میزنید و متد رو فراخونی میکنید
    // اشاره و فرخانی کانتکست مورد نظر =>
    static contextType = TestContext;
    // اشاره کردن در کد => this.context
  


  // set interval =>
  startInterval = ()=>{
    if(this.state.isStart == false){
      this.setState({
        isStart : true
      })
      interval = setInterval(() => {

        this.setState({
          second :  this.state.second + 1
        })

        if(this.state.second == 60){
          this.setState({
            second : 0 ,
            minute : this.state.minute + 1
          })
        }
        else if(this.state.minute == 60){
          this.setState({
            minute : 0 ,
            hour : this.state.hour + 1
          })
        }
      }, 1000);
    }
  }


  //remove interval =>
  removeInerval =()=>{
    clearInterval(interval)
    this.setState({
      isStart : false
    })
  }  



  reastInterval =()=>{
    this.removeInerval();
    this.setState({
      hour : 0,
      minute : 0,
      second : 0
    })
  }


  // save data Time =>
  handelSaveTime = ()=>{
    let newTime = document.querySelector('.timer').innerHTML    
    {/* اشاره به کانتکست =>>> */}
    this.context.setTimeArr([...this.context.timeArr , newTime]);
  }






  
  render(){
    let h = this.state.hour<10 ? "0"+this.state.hour : this.state.hour;
    let m = this.state.minute<10 ? "0"+this.state.minute : this.state.minute;
    let s = this.state.second<10 ? "0"+this.state.second : this.state.second;

    return(
      <>
        <h2 className='timer' onClick={this.handelSaveTime} >{h}:{m}:{s}</h2>
        <div className='allBtn'>
          <button onClick={this.removeInerval} className='btn'>STOP</button>
          <button onClick={this.reastInterval} className='btn'>RESET</button>
          <button onClick={this.startInterval} className='btn'>START</button>
          <button onClick={this.props.handelisLight} className='btn' style={{
            background : this.props.isLight ? 'black' : 'darkorange' ,
            color :this.props.isLight ? "darkorange" : 'white'}} > {this.props.isLight ? 'black' : 'light'} </button>
        </div>

      </>
    )
  }
}
  
  
export default Timer;