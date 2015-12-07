/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.scss';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Firebase from 'firebase';
import _ from 'lodash';

@withViewport
@withStyles(styles)
class Footer extends Component {

  constructor(props){
    super(props);

    this.state = {
      totalStops: 0
    }

    this.firebaseRef = new Firebase('https://jagertrain.firebaseio.com/transactions');
    this.firebaseRef.once("value", (dataSnapshot)=> {
      var transactions = dataSnapshot.val();
      this.setState({
        totalStops: _.size(transactions)
      });
    });
  }

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <footer className="Footer">
        <img className="Footer-jagertrain" src={require('./jagertrain.png')} alt="Riskdisk Jagertrain - On it, till we vomit!" />
        <h3>It’s Jager Time!!! Please Drink Irresponsibly #RDJT</h3>
        <h3 className="Footer-counter">Total Stops: <span>{this.state.totalStops}</span></h3>
      </footer>
    );
  }

}

export default Footer;
