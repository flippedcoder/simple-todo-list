import React, { Component } from 'react';
import '../assets/App.css';

class ListItemDetails extends Component {
    constructor() {
        super();

        this.closeDetails = this.closeDetails.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.editListItemDetails = this.editListItemDetails.bind(this);
    }

    closeDetails() {

    }

    deleteListItem() {

    }

    editListItemDetails() {

    }

	render() {
		return (
			<div className="list-item-details">
                <header>
                    <p>Details</p>
                    <p onClick={this.closeDetails}><i className="fas fa-close"></i></p>
                </header>
                <main>
                    {this.props.listItem.details}
                </main>
                <footer>
                    <p onClick={this.editListItemDetails}><i className="fas fa-pencil"></i></p>
                    <p onClick={this.deleteListItem}><i className="fas fa-trash"></i></p>
                </footer>
			</div>
		);
	}
}

export default ListItemDetails;
