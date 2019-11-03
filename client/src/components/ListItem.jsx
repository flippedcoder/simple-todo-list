import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

import ListItemDetails from './ListItemDetails';

class ListItem extends Component {
    constructor() {
        super();

        this.completed = <i className="fas fa-close"></i>;
        this.listItemDetails = <div>No list item details to show. Add some.</div>;

        this.checkListItemCompleted = this.checkListItemCompleted.bind(this);
        this.showListDetails = this.showListDetails.bind(this);
    }

    componentDidMount() {
        this.checkListItemCompleted();
    }

    checkListItemCompleted() {
        if (this.props.item.isComplete) {
            this.completed = <i className="fas fa-check"></i>;
        } else {
            this.completed = <i className="fas fa-close"></i>;
        }
    }

    showListDetails(listItem) {
        if (listItem !== null) {
            this.listItemDetails = <ListItemDetails listItem={listItem} />
        } else {
            this.listItemDetails = <div>No list item details to show. Add some.</div>;
        }
    }

	render() {
		return (
			<div className="list-item">
                <div onClick={this.showListDetails}>{this.props.item.name}</div>
                <div>{this.completed}</div>
                <div>
                    <p><i className="fas fa-angle-up"></i></p>
                    <p><i className="fas fa-angle-down"></i></p>
                </div>
                {this.listItemDetails}
			</div>
		);
	}
}

export default ListItem;
