import React, { Component } from 'react';

let UserGreeting = (props) => {
  return <h1>Welcome back!</h1>
}

let GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>
}

let Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

let LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

let LogoutButton = (props) => {
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

// Inline Logical && Operator

let Mailbox = (props) => {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
      </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

// Prevent a component from rendering

let WarningBanner = (props) => {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};   // sets the state to show the warning by default
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {                 // sets the showWarning state to the opposite of current state
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />   
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}








export { UserGreeting, GuestGreeting, Greeting, LoginControl, Mailbox, messages, Page };