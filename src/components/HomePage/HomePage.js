import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import IdleScreen from '../IdleScreen';
import Passenger from '../Passenger';
import Firebase from 'firebase';
import $ from 'jquery';

@withStyles(styles)
class HomePage extends Component {

  constructor(props){
    super(props);

    var self = this;

    self.state = {
      customers: {},
      passenger: null
    }

    var newItems = false;

    self.firebaseCustomerRef = new Firebase('https://jagertrain.firebaseio.com/customers');

    self.firebaseCustomerRef.once("value", (dataSnapshot)=> {
      var customers = dataSnapshot.val();

      dataSnapshot.forEach(function(childSnapshot) {
        var passenger = childSnapshot.val();

        var img = new Image();
        img.src = '/passengers/' + passenger.forename.toLowerCase() + '_' + passenger.surname.toLowerCase() + '.png';
      });

      self.setState({
        customers: customers
      });
    });

    self.firebaseCustomerRef.on("child_added", (customer)=> {
      if (this.state.customers[customer.key()]) return;

      let customerVal = customer.val();
      customerVal.key = customer.key();
      this.state.customers[customerVal.key] = customerVal;
      this.setState({customers: this.state.customers});
    });

    self.firebaseCustomerRef.on("child_changed", (customer)=> {
      if (!this.state.customers[customer.key()]) return;

      let customerVal = customer.val();
      customerVal.key = customer.key();
      this.state.customers[customerVal.key] = customerVal;
      this.setState({customers: this.state.customers});
    });

    self.firebaseTransactionsRef = new Firebase('https://jagertrain.firebaseio.com/transactions');

    self.firebaseTransactionsRef.on("child_added", (transaction)=> {

      if (!newItems) return;

      var passenger = self.state.customers[transaction.val().customer];
      if (typeof passenger === "undefined") {
        console.log('id not recognised');
        return;
      }

      let audio = new Audio(`/sounds/clip_${Math.floor((Math.random() * 7) + 1)}.ogg`);
      audio.play();

      var $IdleScreem = $('.IdleScreen').addClass("spin-out");

      passenger.imageUrl = '/passengers/' + passenger.forename.toLowerCase() + '_' + passenger.surname.toLowerCase() + '.png';

      setTimeout(function(){

        self.setState({
          passenger: passenger
        });

        setTimeout(function(){
          var $Passenger = $('.Passenger');
          $Passenger.fadeOut(1000, function() {
            self.setState({
              passenger: null
            });
          });
        }, 5000);

      }, 2000);

    });

    this.firebaseTransactionsRef.once('value', (dataSnapshot) => {
      newItems = true;
    });

    self.firebaseSoundPlaysRef = new Firebase('https://jagertrain.firebaseio.com/soundplays');
    self.firebaseSoundPlaysRef.on('child_changed', (soundPlay) => {

      var id = soundPlay.val();
      let audio = new Audio(`/sounds/clip_${id}.ogg`);
      audio.play();
    });
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Riskdisk Jagertrain 2015';
    this.context.onSetTitle(title);

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
        <div className="IdleScreen-wrapper">
          <IdleScreen />
          <h2>All Aboard!!! #RDJT</h2>
        </div>
      )
    }

  }

}

export default HomePage;
