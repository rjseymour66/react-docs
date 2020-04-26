import React, { Component } from 'react';


class Clock extends Component {
  constructor(props) {                  // 1. React calls the constructor and initializes the state
    super(props);
    this.state = {date: new Date()};    // Can only use this.state in the constructor. Must use setState() everywhere else
  }

  componentDidMount() {                 // 3. React calls this lifecycle method. Clock component asks browser
    this.timerID = setInterval(         //    to set up a timer to call the tick() method every second
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {              // 5. Calls this to remove it from the DOM
    clearInterval(this.timerID);
  }

  tick() {                              // 4. The browser calls the tick method every second.
    this.setState({                     //    - Clock component schedules a UI update by calling setState()
      date: new Date()                  //    - React finds out that the state has changed, so it calls the render method again
    });
  }

  render() {                            // 2. React calls the render method and updates the DOM to match what is in the render method
    return (
      <div>
        <h1>This is a clock!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/*
let FormattedDate = (props) => {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}
*/

export default Clock;