import React, { Component } from 'react';
// import { Link } from 'react-router';

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>How it Works</h2>
          <div className="card">
            <img className="image" src="http://localhost/react/react-router-es6-example/src/hairstyle.jpg" alt="proj1"/>
            
            <div className="container1">
              <h4><b>Hair Styling</b></h4> 
                <p> It is important to know how to implement hair styling ideas.
                 We offer hair styling inspiration along with the required styling instructions.
                 </p>
            </div>
          </div>

          <div className="card">
            <img className="image" src="http://localhost/react/react-router-es6-example/src/wedding.jpg" alt="proj1"/>
            <div className="container1">
              <h4><b>Bridal Makeup</b></h4> 
                <p> Wedding traditions and customs vary greatly between cultures, ethnic groups, religions and we provide you as required.
                 </p>
            </div>
          </div>

          <div className="card">
            <img className="image" src="http://localhost/react/react-router-es6-example/src/basic.jpg" alt="proj1"/>
            <div className="container1">
              <h4><b>Basic Makeup</b></h4> 
                <p> If you are new to makeup and feel overwhelmed by the cosmetic isle, don't fret!
                 </p>
            </div>
          </div>


      </div>
    );
  }
}

class StuffIWant extends Component {
  render() {
    return (
      <div>
        <p>Nothing. Nothing at all.</p>
      </div>
    );
  }
}


export { Stuff, StuffIWant };
