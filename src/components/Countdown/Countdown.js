import React, { PropTypes, Component } from 'react';
import styles from './Countdown.scss';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import countdown from 'countdown';

@withViewport
@withStyles(styles)
class Countdown extends Component {

  constructor(props){
    super(props);

    var self = this;

    var timerId = countdown(
        new Date("December 18, 2015 19:00:00"),
        function(timespan) {
          self.setState({
            countdown: timespan.toString()
          });
          //document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
        },
        countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

    this.state = {
      countdown: countdown( new Date("December 18, 2015 19:00:00") ).toString()
    }

  }

  render() {
    return (
      <div className="Countdown">
        <h2>{this.state.countdown}</h2>
        <h5>Please contact Ben Danby, Edward Smith or James Morton to board the train!</h5>
      </div>
    );
  }

}

export default Countdown;
