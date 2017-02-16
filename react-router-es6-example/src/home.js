import React, { Component } from 'react';
// import CalendarDay from './CalendarDay.js';

class Home extends Component {
  constructor(props) {
      super(props);

      this.state = {
      
      };

      // this.calendar = this.calendar.bind(this);
  }
  // calendar(){
  //     <CalendarDate/>
  // }
  render() {
    return (
      <div>
        <h2>BEAUTY'S KNOCKING</h2>
        <p>
          Book in-home hair & makeup from vetted beauty professionals.
        </p>
        <img className="bg" src="http://localhost/react/react-router-es6-example/src/bg.png" alt="HTML5 Icon"/>
        <div className="bar">
            <ul className="home-list">
              <li className="list">
                <select>
                  <option value="select city">Select city</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Washington">Washington</option>
                  <option value="London">London</option>
                  <option value="Las Vegas">Las Vegas</option>
                </select>
              </li>
              <li className="list">
                <select id="service">
                  <option className="list" value="select service">Select Service</option>
                  <option value="Hair style">Hair style</option>
                  <option value="MakeUp">MakeUp</option>
                  <option value="Spa">Spa</option>
                </select>
              </li>
              <li className="date"> <input type="date"/></li>
              <li className="list">
                <select>
                  <option value="Select time">Select time</option>
                  <option value="10:00AM">10:00AM</option>
                  <option value="11:00AM">11:00AM</option>
                  <option value="12:00PM">12:00PM</option>
                  <option value="01:00PM">01:00PM</option>
                  <option value="02:00PM">02:00PM</option>
                  <option value="03:00PM">03:00PM</option>
                  <option value="04:00PM">04:00PM</option>
                  <option value="05:00PM">05:00PM</option>
                  <option value="06:00PM">06:00PM</option>
                </select>
              </li>
              <button type="button" className="Search"><span className="glyphicon glyphicon-search"></span> Search Stylist</button>
            </ul>
        </div>
      </div>
    );
  }
}

export default Home;
