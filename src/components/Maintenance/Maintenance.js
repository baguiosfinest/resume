import React, { Component } from 'react';
import Countdown from '../Countdown/Countdown';
import Header from './Header';
import './Maintenance.scss';

export default class Maintenance extends Component {
  render() {
    return (
      <div className="maintenance">
        <Header 
          heading="Something Big Is Coming" 
          desc="And I don't know what!!!" />
        <Countdown time={ new Date('Dec 25, 2019 00:00:00').getTime() } />
      </div>
    )
  }
}
