/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <header className="header">
        <h1>Riskdisk Jagertrain 2015</h1>
      </header>
    );
  }

}

export default Header;
