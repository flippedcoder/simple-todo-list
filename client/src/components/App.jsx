import axios from 'axios';
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
		axios.get(`http://localhost:3010/listItem/getAllListItems`)
			.then(res => {
				this.setState({
					listName: res.listName,
					listItems: [...res.data]
				});

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
