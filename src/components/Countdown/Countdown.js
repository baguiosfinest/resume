import React, { Component } from 'react';
import './Countdown.scss';

export default class Countdown extends Component {

  constructor(props){
    super(props);

    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      intervalId: ''
    }

  }

  timer = () => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      let countDown = this.props.time;

      let interval = setInterval(() => {

        let now = new Date().getTime(),
            distance = countDown - now;
            this.setState({
              days: Math.floor(distance / day),
              hours: Math.floor((distance % day) / hour),
              minutes: Math.floor((distance % hour) / minute),
              seconds: Math.floor((distance % minute) / second),
              intervalId: interval
            });
      }, second);

  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.state.invervalId);
  }

  render() {

    

    return (
      <div className="countdown-timer">
        <div className="countdown-timer__box">
          <span>{ this.state.days }</span>
          Days
        </div>
        <div className="countdown-timer__box">
          <span>{ this.state.hours }</span>
          Hours
        </div>
        <div className="countdown-timer__box">
          <span>{ this.state.minutes }</span>
          Minutes
        </div>
        <div className="countdown-timer__box">
          <span>{ this.state.seconds }</span>
          Seconds
        </div>
      </div>
    )
  }
}
