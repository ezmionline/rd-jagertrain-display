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
      customers: {},
      passenger: null
    }

    var newItems = false;

    this.firebaseCustomerRef = new Firebase('https://jagertrain.firebaseio.com/customers');

    this.firebaseCustomerRef.once("value", (dataSnapshot)=> {
      var customers = dataSnapshot.val();
      this.setState({
        customers: customers
      });
      console.log(customers);
    });

    this.firebaseTransactionsRef = new Firebase('https://jagertrain.firebaseio.com/transactions');

    this.firebaseTransactionsRef.on("child_added", (transaction)=> {

      if (!newItems) return;

      var passenger = {
        id: "",
        forename: "Ben",
        surname: "Danby",
        nickname: "The Guzzler",
        message: "Some random message to go here..."
      }

      this.setState({
        passenger: passenger
      });

      var self = this;

      setTimeout(function(){
        console.log("test");
        self.setState({
          passenger: null
        });
      }, 2000);
      // passenger null = idle
      // so set to null after a timeout

    });

    this.firebaseTransactionsRef.once('value', (dataSnapshot) => {
      newItems = true;
    });

  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Riskdisk Jagertrain 2015';
    this.context.onSetTitle(title);

    console.log(this.state.passenger);

    if (this.state.passenger) {
      return (
        <div className="HomePage">
          <div className="HomePage-container">
            <Passenger passenger={this.state.passenger} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          Idle Screen!
        </div>
      )
    }

  }

}

export default HomePage;
