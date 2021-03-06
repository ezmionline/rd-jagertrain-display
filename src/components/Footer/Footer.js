/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.scss';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import StopCounter from '../StopCounter';

@withViewport
@withStyles(styles)
class Footer extends Component {

  render() {
    return (
      <footer className="Footer">
        <StopCounter />
      </footer>
    );
  }

}

export default Footer;
