import React, { Component } from 'react';
import styles from './IdleScreen.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class IdleScreen extends Component {

  render() {
    return (
      <div className="IdleScreen">
        <img className="IdleScreen-logo" src={require('./logo.png')} alt="Riskdisk Jagertrain 2015" />
      </div>
    );
  }

}

export default IdleScreen;
