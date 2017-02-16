import React, { Component } from 'react';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';
 
class CalendarDate extends Component {

  constructor(props) {
      super(props);

      this.state = {
        date: moment()
      };
  }
 
  render() {
    return (

      <Calendar
        onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
        onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
        date={this.state.date}
        onPickDate={(date) => console.log(date)}
      />
    );
  }
}

export default CalendarDate;