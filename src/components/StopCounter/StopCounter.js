import React, { PropTypes, Component } from 'react';
import styles from './StopCounter.scss';
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
      transactions: {}
    }

    this.firebaseRef = new Firebase('https://jagertrain.firebaseio.com/transactions');

    this.firebaseRef.on("child_added", (transaction)=> {
      if (this.state.transactions[transaction.key()]) {
        return;
      }

      let transactionVal = transaction.val();
      transactionVal.key = transaction.key();
      this.state.transactions[transactionVal.key] = transactionVal;

      this.setState({
        transactions: this.state.transactions
      });
    });

    this.firebaseRef.on("child_removed", (transaction)=> {
      var key = transaction.key();
      delete this.state.transactions[key];
      this.setState({
        transactions: this.state.transactions
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
      <div className="StopCounter">
        <h2 className="StopCounter-counter">Total Stops: <span>{_.size(this.state.transactions)}</span></h2>
      </div>
    );
  }

}

export default Footer;
