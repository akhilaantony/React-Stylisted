import React, { Component } from 'react';
import { Modal } from 'react-overlays';
import DayPicker, { DateUtils } from "react-day-picker";

// import { connect } from 'react-redux';
// import './Login.css';

const modalStyle = {
  position: 'fixed',
  zIndex: 1080,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  //backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.

  let top = 50 ;
  let left = 50 ;
  return {
    position: 'absolute',    
    width: 400,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};


class CalendarDay1 extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
        selectedDay: new Date(),

    };

	  this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.login = this.login.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);

  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  login(event) {
    event.preventDefault();
    
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
       <div>
          <ul className="home-list">
	         <li>Select a date</li>
          </ul>

	        <Modal
	          aria-labelledby='modal-label'
	          style={modalStyle}
	          backdropStyle={backdropStyle}
	          show={this.state.showModal}
	          onHide={this.close}
	        >
	          	<div style={dialogStyle()} >
	            	<h4 id='modal-label'></h4>
                <form>
		          		 <DayPicker
                      initialMonth={ new Date(2016, 1) }
                      selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
                      onDayClick={ this.handleDayClick.bind(this) }
                    />
                </form>
                
	          </div>
	        </Modal>
		</div>
    );
  }
}


export default (CalendarDay1);


