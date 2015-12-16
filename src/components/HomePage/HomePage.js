import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import IdleScreen from '../IdleScreen';
import Passenger from '../Passenger';
import Firebase from 'firebase';
import $ from 'jquery';

@withStyles(styles)
class HomePage extends Component {

  static propTypes = {

  };

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
      self.setState({
        customers: customers
      });
    });

    self.firebaseTransactionsRef = new Firebase('https://jagertrain.firebaseio.com/transactions');

    self.firebaseTransactionsRef.on("child_added", (transaction)=> {

      if (!newItems) return;

      let audio = new Audio(`/sounds/clip_${Math.floor((Math.random() * 5) + 1)}.ogg`);
      audio.play();

      var $IdleScreem = $('.IdleScreen').addClass("spin-out");

      var passenger = this.state.customers[transaction.val().customer];
      passenger.imageUrl = '/passengers/' + passenger.forename.toLowerCase() + '-' + passenger.surname.toLowerCase() + '.png';

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

      self.firebaseSoundPlays.remove();
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
        <IdleScreen />
      )
    }

  }

}

export default HomePage;
