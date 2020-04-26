import React, { Component } from 'react';

// components as functions: 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Thanks extends Component {
  render() {
    return <h1>Thank you, {this.props.name}</h1>
  }
}

let Composition = () => {
  return (
    <div>
      <h3>This is Composition</h3>
      <Welcome name="Jim" />
      <Thanks name="Ryan" />
      <Welcome name="Jessica" />
      <Thanks name="Andrew" />
  </div>
  );
}

export { Welcome, Thanks, Composition };