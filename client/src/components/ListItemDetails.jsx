import axios from 'axios';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import '../assets/ListItemDetails.css';

class ListItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: props.isModalOpen
        };

        this.closeDetails = this.closeDetails.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.editListItemDetails = this.editListItemDetails.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            isModalOpen: this.props.isModalOpen
        });
    }

    closeDetails() {
        this.setState({
            isModalOpen: false
        });
    }

    deleteListItem() {
        let listItemId = this.props.listItem.listItemId;

        axios.delete(`http://localhost:3010/listItem/deleteListItem/${listItemId}`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
    }

    editListItemDetails(e) {
        let listItemId = this.props.listItem.listItemId;
        let listItemDetails = e.target.listItemDetails;

        axios.put(`http://localhost:3010/editListItemDetails/${listItemId}`, {
                listItemDetails: listItemDetails
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

	render() {
		return (
			<div className={"list-item-details" + (this.state.isModalOpen ? "" : " hidden")}>
                <header className="flex-2">
                    <h1>Details</h1>
                    <p onClick={this.closeDetails}>
                        <FontAwesomeIcon icon={faBomb}
                            className="list-item-action"
                            onClick={this.closeDetails} />
                    </p>
                </header>
                <main>
                    {this.props.listItem.details}
                </main>
                <footer className="flex-2">
                    <p onClick={this.editListItemDetails}>
                        <FontAwesomeIcon icon={faPencilAlt}
                            className="list-item-action" />
                    </p>
                    <p onClick={this.deleteListItem}>
                        <FontAwesomeIcon icon={faTrash}
                            className="list-item-action" />
                    </p>
                </footer>
			</div>
		);
	}
}

export default ListItemDetails;
