import React, { Component } from 'react';
import { Modal } from 'react-overlays';
import $ from 'jquery';
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

  let top = 45 ;
  let left = 82 ;
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


class Login extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
    };

	  this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.login = this.login.bind(this);

  }
  close() {
    console.info("...");
    
    this.setState({ showModal: false });

  }

  open() {
    this.setState({ showModal: true });
  }
  login() {
    event.preventDefault();
    var usrname = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    let login = {
      "username" : usrname,
      "password" : password
    };
    let variable = JSON.stringify(login);

    $.ajax({
       method: 'POST',
       data: variable,
         url: 'http://localhost/angular/angular%20backend/Controller/main.php?procedure=login'
      }).then(successCallback, errorCallback);
      function successCallback(data){
         var dat = JSON.parse(data);
        if(dat.response === true){
          alert("Successfully Logged in.");
        }
        else{
          alert(dat.message);
        }
      }

      function errorCallback(error){
        return error;
      }
        
    
  }

  render() {
    return (
       <div className="modal">
	        <p onClick={this.open}>Login</p>

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
                    Username:<input type="text"  id="username" ref="username" className="form-control" placeholder="Username" required />
                    <br/>
                    <br/>
                  </div>
                  <div>
                    Password:<input type="password"  id="password" ref="password" className="form-control" placeholder="Password" required />
                  </div>
                </form>
                <div>
                    <br/>
                    <button className="btn btn-default" onClick={this.close}><i className="fa" />{' '}Close</button>
        						<button className="btn btn-default" onClick={this.login}><i className="fa" />{' '}LOGIN</button>
                </div>
	          </div>
	        </Modal>
		</div>
    );
  }
}


export default (Login);


