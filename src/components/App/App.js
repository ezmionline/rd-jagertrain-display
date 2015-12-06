/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.scss';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Footer from '../Footer';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              Sidebar to go here
            </div>
            <div className="col-md-8">
              <Header />
              {this.props.children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    ) : this.props.children;
  }

}

export default App;
