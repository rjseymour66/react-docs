import React, { Component } from 'react';

const name = 'Ryan Seymour';

// wrap JSX elements in parentheses to make them more readable
const element = (
	<h1>
		Hello, {name}
	</h1>
);

const user = {
	firstName: 'Ace',
	lastName: 'Ventura'
}

// use quotes to specify string literals as attributes:
const quotes = <div tabIndex="0"></div>

// curly braces to embed a JS expression as an attribute
const jsExpression = <img src={user.avatarUrl}></img>;


// children
const parent = (
	<div>
		<h1>This is the parent!</h1>
		<h2>This is the child!</h2>
	</div>
)

class Jsx extends Component {

	formatName = user => {
		return user.firstName + ' ' + user.lastName;
	}

	getGreeting = (user) => {
		if (user.firstName === 'Tony') {
			return <h1>Hello, {this.formatName(user)}!</h1>
		}
		return <h1>Hello, Stranger</h1>
	}

	render() {
		return (
			<div>
			<p>This is the JSX:</p>
				<h1>{element}</h1>
				<h2>
					Put any valid JS in the curly brackets, like this: {this.formatName(user)}
				</h2>
				<p tabIndex="0">This is an embedded function. I'm not sure if it will work:</p>
				<h1>{this.getGreeting(user)}</h1>
				<h1>{ parent }</h1>
			</div>
		);
	}
}

export default Jsx;