import React, { Component } from 'react';


class GiftGorgeous extends Component{
	constructor(props) {
	  	super(props);

	  	this.state = {
	    };

	    this.cancel = this.cancel.bind(this);
	    this.gift = this.gift.bind(this);
	}
	cancel(){
	}
	gift(){

	}
  render() {
    return(
      <div className="GiftGorgeous">
	      <form className="giftform">
	      	<fieldset className="border">
	      	 <div className="gorg">
	          <h4> Giving Gorgeous looks good on you! </h4>
	         </div>
	          <div className="form">
		          <div className="field">

		            <strong>From</strong>: <br/>
		      		<fieldset className="fieldset">
			            <input type="text" id="fromname" ref="fromname" className="form-control" placeholder="Your Name" required maxLength="50" tabIndex="1"/>
			            <br/>
			            <br/>
			            <input type="text" id="fromemail" ref="fromemail" className="form-control" placeholder="Your Email Address" required maxLength="50" tabIndex="1"/>
		      		</fieldset>
		         
		          </div>
		          <div className="field">

		            <strong>To</strong>: 
		            <br/>
			      	<fieldset className="fieldset">

			            <input type="text" id="fromname" ref="fromname" className="form-control" placeholder="Recipients Name" required maxLength="50" tabIndex="1"/>
			            <br/>
			            <br/>
			            <input type="text" id="fromemail" ref="fromemail" className="form-control" placeholder="Recipients Email Address" required maxLength="50" tabIndex="1"/>
			      	</fieldset>
		          
		          </div>
		          <div className="field">

		            <strong>Message</strong>: 
		            <br/>
			      	<fieldset className="fieldset">

			            <input type="text" id="fromemail" ref="fromemail" className="message" placeholder="Message" required maxLength="150" tabIndex="1"/>
	          	  		<br/>
			            <br/>
			      	</fieldset>
		        </div>
		        <div className="field">

		            <strong>Card Details</strong>: 
		            <br/>
			      	<fieldset className="fieldset">

			            <input type="text" id="fromemail" ref="fromemail" className="message" placeholder="Enter Card Number" required maxLength="18" tabIndex="1"/>
	          	  		<br/>
			            <br/>
			            <input type="text" id="fromemail" ref="fromemail" className="message" placeholder="CVC" required maxLength="3" tabIndex="1"/>
			            <input type="text" id="fromemail" ref="fromemail" className="message" placeholder="Exp Date" required maxLength="12" tabIndex="1"/>

			      	</fieldset>
		        </div>
	          </div>
	            
	          <div className="col-md-6">
	          	  <br/>
	          	  <br/>
	              <button className="btn btn-default" onClick={this.cancel}><i className="fa" />{' '}Cancel</button>
	              <button className="btn btn-default" onClick={this.gift}><i className="fa" />{' '}Gift Gorgeous</button>
	  	      </div>
	      	</fieldset>
			   
	      </form>
      </div>
    );
  }
}

export default GiftGorgeous;
