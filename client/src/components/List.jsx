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
					<p className="list-title">{this.props.listName}</p>
                    <FontAwesomeIcon icon={faPlus}
                                     className="list-action"
                                     onClick={this.addListItem} />
                    <FontAwesomeIcon icon={faPencilAlt}
                                     className="list-action"
                                     onClick={this.editList} />
                    <FontAwesomeIcon icon={faBars}
                                     className="list-action"
                                     onClick={this.showMenu} />
				</header>
                <main>
                    {this.props.listItems.map(listItem => {
                        return <ListItem item={listItem} />
                    })}
                </main>
			</div>
		);
	}
}

export default List;
