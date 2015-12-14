import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import Passenger from '../Passenger';
import Firebase from 'firebase';

@withStyles(styles)
class HomePage extends Component {

  static propTypes = {

  };

  constructor(props){
    super(props);

    this.state = {
      customers: {}
    }

    this.firebaseRef = new Firebase('https://jagertrain.firebaseio.com/customers');

    this.firebaseRef.once("value", (dataSnapshot)=> {
      var customers = dataSnapshot.val();
      this.setState({
        customers: customers
      });
      console.log(customers);
    });
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Riskdisk Jagertrain 2015';
    this.context.onSetTitle(title);

    var passenger = {
      id: "",
      forename: "Ben",
      surname: "Danby",
      nickname: "The Guzzler",
      message: "Some random message to go here..."
    }

    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <Passenger
            firstName={passenger.forename}
            lastName={passenger.surname}
            nickName={passenger.nickname}
            imageUrl={passenger.id + '.png'}
            message={passenger.message} />
        </div>
      </div>
    );
  }

}

export default HomePage;
