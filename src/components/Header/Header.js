/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Header.scss';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';

@withViewport
@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <header className="Header">
        <h1>Riskdisk Jagertrain 2015</h1>
      </header>
    );
  }

}

export default Header;
