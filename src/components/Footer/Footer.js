/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.scss';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class Footer extends Component {

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
      </footer>
    );
  }

}

export default Footer;
