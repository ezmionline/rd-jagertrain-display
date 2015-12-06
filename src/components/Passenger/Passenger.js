import React, { Component } from 'react';
import styles from './Passenger.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Passenger extends Component {

  propTypes: {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    nickName: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Passenger">
        <img className="Passenger-image" src={this.props.imageUrl} />
        <h2 className="Passenger-name">{this.props.firstName} &ldquo;{this.props.nickName}&rdquo; {this.props.lastName}</h2>
        <p className="Passenger-message">{this.props.message}</p>
      </div>
    );
  }

}

export default Passenger;
