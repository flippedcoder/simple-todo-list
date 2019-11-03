import React, { Component } from 'react';
import '../assets/App.css';

import List from './List';

class App extends Component {
	constructor() {
		super();

		this.state = {
			listName: '',
			listItems: []
		};
	}

	componentDidMount() {
		this.setState({
			listName: 'testing',
			listItems: [
				{
					name: "make garage door open",
					details: "finished",
					listItemId: 1,
					positionId: 4,
					isComplete: true
				},
				{
					name: "practice uku",
					details: "go over silent night",
					listItemId: 2,
					positionId: 2,
					isComplete: false
				},
				{
					name: "go to wushu lessons",
					details: "i'm just changing stuff",
					listItemId: 3,
					positionId: 3,
					isComplete: false
				},
			]
		});
	}

	render() {
		return (
			<div className="App">
				<List listName={this.state.listName}
					  listItems={this.state.listItems} />
			</div>
		);
	}
}

export default App;
