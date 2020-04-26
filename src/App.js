import React, { Component } from 'react';
// import Jsx from './Jsx';
// import Render from './Render';
// import { Welcome, Thanks, Composition } from './Components';
import Clock from './State';
import Toggle from './Events';
import { Greeting, LoginControl, Mailbox, messages, Page } from './Cond-Rendering';
import { NumberList, numbers, Blog, posts } from './Keys';
import { NameForm, EssayForm, FlavorForm, Reservation } from './Forms';
import Calculator from './Lifting-State';
import { WelcomeDialog, SignUpDialog } from './Containment';



class App extends Component {
	render() {
		return (
			<div>
				{/* <Jsx />
				<Welcome name="Ryan" />
				<Thanks name="Tony" />
				<Composition /> */}
				<Clock />
				{/* <Toggle />
				<LoginControl />
				<Mailbox unreadMessages={messages} />
				<Page />
				<NumberList numbers={numbers} /> 
				<Blog posts={posts} />
				<NameForm />
				<EssayForm />
				<FlavorForm />
				<Reservation />*/}
				<Calculator />
				<WelcomeDialog />
				<SignUpDialog />
			</div>
		);
	}
}

export default App;