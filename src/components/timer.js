import React, { Component } from 'react';
import './timer.less'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result: '00:00'
    };
  }

   p = (s) =>{
        return s < 10 ? '0' + s: s;
    }

  countTime = (e) => {
    const end = this.props.endTimer
    if(!isNaN(parseInt(end))) {
       let now = Date.parse(new Date())/1000
       let endTime = Date.parse(end)/1000
       let leftTime = endTime-now
       
       if(leftTime < 0) {
           window.clearInterval(this.interval)
       } else {
           let d = Math.floor(leftTime/60/60/24)
           let h = Math.floor(leftTime/60/60%24)
           let m = Math.floor(leftTime/60%60)
           let s = Math.floor(leftTime%60)
            if(h == 0){
               this.setState({result: `${this.p(m)}:${this.p(s)}` })
            }else{
                this.setState({result: `${this.p(h)}:${this.p(m)}:${this.p(s)}` })
            }
       }

       
    }
  }


  componentDidMount () {
     
     this.interval = setInterval(this.countTime,1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    return (
        this.state.result
    )
  }
}



export default Timer

    