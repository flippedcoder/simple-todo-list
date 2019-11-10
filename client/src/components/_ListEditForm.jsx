import axios from 'axios';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import '../assets/_ListEditForm.css';

class _ListEditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditForm: props.showEditForm
        };

        this.closeForm = this.closeForm.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            showEditForm: this.props.showEditForm
        });
    }

    closeForm() {
        this.setState({
            showEditForm: false
        });
    }

    saveChanges() {
        let listId = this.props.list.listId;

        axios.put(`http://localhost:3010/list/editListName/${listId}`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
    }

	render() {
		return (
			<div className={"list-edit-form" + (this.state.showEditForm ? "" : " hidden")}>
                <header className="flex-2">
                    <h1>Change list name</h1>
                    <p onClick={this.closeForm}>
                        <FontAwesomeIcon icon={faBomb}
                            className="list-item-action"
                            onClick={this.closeForm} />
                    </p>
                </header>
                <main>
                    <form onSubmit={this.saveChanges}>
                        <input type="text"
                                placeholder="enter list name" />
                        <button type="submit">Save Changes</button>
                    </form>
                </main>
			</div>
		);
	}
}

export default _ListEditForm;
