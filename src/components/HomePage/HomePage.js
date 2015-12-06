import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomePage extends Component {

  static propTypes = {

  };

  static contextTypes = {

  };

  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <h2>Home</h2>
        </div>
      </div>
    );
  }

}

export default HomePage;
