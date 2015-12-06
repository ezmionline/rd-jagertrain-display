import React, { Component } from 'react';
import styles from './Passenger.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Passenger extends Component {

  render() {
    return (
      <div className="Passenger">
        <img className="Passenger-image" src="" />
        <h2 className="Passenger-name">Ben "The Guzzler" Danby</h2>
        <p className="Passenger-message">Some random message to go here...</p>
      </div>
    );
  }

}

export default Passenger;
