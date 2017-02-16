import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
 

 
class CalendarDay extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        selectedDay: new Date(),
      };

      this.handleDayClick = this.handleDayClick.bind(this);
  }

  

  handleDayClick(e, day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: null })
    } else {
      this.setState({ selectedDay: day });
    }
  }
  render() {
    return (
      <DayPicker
        initialMonth={ new Date(2016, 1) }
        selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
        onDayClick={ this.handleDayClick.bind(this) }
      />
    );
  }
}

export default CalendarDay;