import React, { Component } from 'react';
import styles from './Passenger.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Passenger extends Component {

  propTypes: {
    passenger: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="Passenger">
        <img className="Passenger-image" src={this.props.passenger.imageUrl} />
        <h2 className="Passenger-name">{this.props.passenger.forename} &ldquo;{this.props.passenger.nickname}&rdquo; {this.props.passenger.surname}</h2>
        <p className="Passenger-message">{this.props.passenger.message}</p>
      </div>
    );
  }

}

export default Passenger;
