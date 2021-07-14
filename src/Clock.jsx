import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};


class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      //записати час який виводить функція getTimeWithOffset()
      time: moment(getTimeWithOffset(props.offset)).format('LTS')
    }

  }
 
  componentDidMount() {
    setInterval(() => {
      this.setState({
        //щоб час змінювався кожну секунду
        time: moment(getTimeWithOffset(props.offset)).format('LTS')
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
