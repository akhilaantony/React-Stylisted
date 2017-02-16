import React, { Component } from 'react';
import { Modal } from 'react-overlays';

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
  let left = 83 ;
  return {
    position: 'absolute',    
    width: 333,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};


class Signup extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
    };

	  this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.signup = this.signup.bind(this);

  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  signup(event) {
    event.preventDefault();
    
  }

  render() {
    return (
       <div className='modal'>
	        <p onClick={this.open}>Signup</p>

	        <Modal
	          aria-labelledby='modal-label'
	          style={modalStyle}
	          backdropStyle={backdropStyle}
	          show={this.state.showModal}
	          onHide={this.close}
	        >
	          	<div style={dialogStyle()} >
	            	<h4 id='modal-label'></h4>
		            <form className="fa">
		          		<div>
                    <input type="text"  ref="username" className="form-control" placeholder="Username" required />
                    <br/>
                    <br/>
                  </div>
                  <div>
                    <input type="password"  ref="password" className="form-control" placeholder="Password" required />
                    <br/>
                    <br/>
                  </div>
                  <div>
                    <input type="password"  ref="confirmpassword" className="form-control" placeholder="Confirm Password" required />
                    <br/>
                  </div>
                </form>
      					<div>
                  <br/>
      						<button className="btn btn-default" onClick={this.close}><i className="fa" />{' '}Close</button>
      				 	  <button className="btn btn-default" onClick={this.signup}><i className="fa" />{' '}Signup</button>
      				  </div>
	          </div>
	        </Modal>
		</div>
    );
  }
}


export default Signup;


