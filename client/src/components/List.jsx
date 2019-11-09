import axios from 'axios';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/List.css';

import _Menu from './_Menu';
import ListItem from './ListItem';

class List extends Component {
    constructor() {
        super();

        this.addListItem = this.addListItem.bind(this);
        this.editList = this.editList.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    addListItem() {
        
    }

    editList() {

    }

    showMenu() {

    }

    render() {
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
                            onClick={this.editList} />
                        <FontAwesomeIcon icon={faBars}
                            className="list-action"
                            onClick={this.showMenu} />
                    </div>
                </header>
                <main>
                    {this.props.listItems.map(listItem => {
                        return <ListItem key={listItem.listId} item={listItem} />
                    })}
                </main>
            </div>
        );
    }
}

export default List;
