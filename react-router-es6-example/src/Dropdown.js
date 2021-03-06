import React, { Component } from 'react';

var colours = [{
  name: "Red",
  hex: "#F21B1B"
}, {
  name: "Blue",
  hex: "#1B66F2"
}, {
  name: "Green",
  hex: "#07BA16"
}];


class Dropdown extends Component{
  constructor(props) {
    super(props);

    this.state = {
      listVisible: false
    };

    this.select = this.select.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }
  
  select(item) {
    this.props.selected = item;
  }
        
  show() {
    this.setState({ 
      listVisible: true
    });
    document.addEventListener("click", this.hide);
  }
        
  hide() {
    this.setState({ 
      listVisible: false 
    });
    document.removeEventListener("click", this.hide);
  }
      
        
  renderListItems() {
    var items = [];
    for (var i = 0; i < this.props.list; i++) {
      var item = this.props.list[i];
      items.push(<div onClick={this.select.bind(null, item)}>
        <span style={{ color: "blue" }}>{item}</span>
      </div>);
    }
    return items;
  }
  render() {
    return(
       <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
        <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
          <span style={{ color:"red" }}>{}</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="dropdown-list">
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;


