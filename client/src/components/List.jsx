import axios from 'axios';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/List.css';

import ListItem from './ListItem';
import _ListEditForm from './_ListEditForm';

class List extends Component {
    constructor() {
        super();

        this.state = {
            showEditForm: false
        };

        this.addListItem = this.addListItem.bind(this);
        this.editListName = this.editListName.bind(this);
        this.showEditFormModal = this.showEditFormModal.bind(this);
    }

    addListItem() {
        axios.post('/listItem/createListItem', {
            listItemData: {
                name: '',
                details: '',
                listItemId: 1,
                positionId: 4
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log('created new item');
            }
        });
    }

    showEditFormModal() {
        this.setState({
            showEditForm: true
        });
    }

    render() {
        let editForm = null;

        if (this.state.showEditForm) {
            editForm = <_ListEditForm showEditForm={true} />;
        }
        return (
            <div id="list">
                <header className="list-header">
                    <span className="list-title">{this.props.listName}</span>
                    <div className="action-icons">
                        <FontAwesomeIcon icon={faPlus}
                            className="list-action"
                            onClick={this.addListItem} />
                        <FontAwesomeIcon icon={faPencilAlt}
                            className="list-action"
                            onClick={this.showEditFormModal} />
                        <FontAwesomeIcon icon={faBars}
                            className="list-action" />
                    </div>
                </header>
                <main>
                    {this.props.listItems.map(listItem => {
                        return <ListItem key={listItem.listId} item={listItem} />
                    })}
                </main>
                {editForm}
            </div>
        );
    }
}

export default List;
