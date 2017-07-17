import React, { Component } from 'react';
import Panel from './panel';
import MenuItem from './menuItem';
import { Image } from 'react-bootstrap';

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {"active": "Rides"};
    this.changeState = this.changeState.bind(this);
  }

  render(){
    return(
      <div className="container">
        <div className="menu">
          <div className="menu-title">
            <Image src="http://via.placeholder.com/120x120" circle />
            <br/>
            <h1>Taxi Native</h1>
          </div>
          <MenuItem name="Rides" changeState={this.changeState} iconName="icon-cab" selected={this.state.active} />
          <MenuItem name="Drivers" changeState={this.changeState} iconName="icon-user-circle-o" selected={this.state.active} />
          <MenuItem name="Clients" changeState={this.changeState} iconName="icon-user" selected={this.state.active} />
          <MenuItem name="Ratings" changeState={this.changeState} iconName="icon-star-filled" selected={this.state.active} />
          <MenuItem name="Settings" changeState={this.changeState} iconName="icon-cog" selected={this.state.active} />
        </div>
        <Panel active={this.state.active}/>
      </div>
    );
  }

  changeState(state){
    this.setState({active: state});
  }
}

export default Container;