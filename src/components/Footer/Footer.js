/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.scss';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Countdown from '../Countdown';

@withViewport
@withStyles(styles)
class Footer extends Component {

  render() {
    return (
      <footer className="Footer">
        <h2>All Aboard!!! #RDJT</h2>
        <Countdown />
      </footer>
    );
  }

}

export default Footer;
