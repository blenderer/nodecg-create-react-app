import React, { Component } from 'react';
import logo from '../logo.svg';

class Dashboard extends Component {
  styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }

  displayReplicant = window.nodecg.Replicant('test')

  onChange = (e) => {
    this.displayReplicant.value = e.target.value;
  }

  render() {
    return (
      <div style={this.styles.container}>
        <img style={{width: 100}} src={`build${logo}`} alt=""/>
        <input onChange={this.onChange} type="text"/>
      </div>
    );
  }
}

export default Dashboard;
