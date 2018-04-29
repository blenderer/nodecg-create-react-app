import React, { Component } from 'react';
import logo from '../logo.svg';

class Graphics extends Component {

  replicant = window.nodecg.Replicant('test')
  state = {
    value: ''
  }

  componentDidMount() {
    this.replicant.on('change', this.onUpdate);
  }

  onUpdate = (newVal) => {
    this.setState({
      value: newVal
    });
  }

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <h1>{value}</h1>
      </React.Fragment>
    );
  }
}

export default Graphics;
