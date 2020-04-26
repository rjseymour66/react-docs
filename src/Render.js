import React, { Component } from 'react';

class Render extends Component {
  tick = () => {
    const element = (
      <div>
        <h1>Hello, World</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
  }
  render () {
    return (
      { element }
    )
  }
}

export default Render;