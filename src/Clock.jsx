import React, { Component } from 'react';

import getTimeWithOffset from './getTime.js';

import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      worldTime: getTimeWithOffset(props.offset),
      location: props.location,
    };

    // IT'S BAD PRACTICE TO NEST A FUNCTION IN A CONSTRUCTOR
    setInterval(
      () => {
        this.setState({
          worldTime: getTimeWithOffset(props.offset)
        });
      },
      1000
    );
  };

  render() {
    return (
      <div className="clock">
        <div className="clock__location">
            {this.state.location}
        </div>
        <div className="clock__time">
            {`${this.state.worldTime}`}
        </div>
      </div>
    );
  }
};

export default Clock;