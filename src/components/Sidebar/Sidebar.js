import React, { Component } from 'react';
import styles from './Sidebar.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Sidebar extends Component {

  render() {
    return (
      <div id="sidebar">
        <img src={require('./logo.png')} alt="Riskdisk Jagertrain 2015" />
      </div>
    );
  }

}

export default Sidebar;
