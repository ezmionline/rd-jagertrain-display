import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import Passenger from '../Passenger';

@withStyles(styles)
class HomePage extends Component {

  static propTypes = {

  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Riskdisk Jagertrain 2015';
    this.context.onSetTitle(title);

    var passenger = {
      firstName: "Ben",
      lastName: "Danby",
      nickName: "The Guzzler",
      imageUrl: "./passengers/ben-danby.png",
      message: "Some random message to go here..."
    }

    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <Passenger
            firstName={passenger.firstName}
            lastName={passenger.lastName}
            nickName={passenger.nickName}
            imageUrl={passenger.imageUrl}
            message={passenger.message} />
        </div>
      </div>
    );
  }

}

export default HomePage;
