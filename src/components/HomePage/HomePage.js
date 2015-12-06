import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomePage extends Component {

  static propTypes = {

  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Riskdisk Jagertrain 2015';
    this.context.onSetTitle(title);
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
