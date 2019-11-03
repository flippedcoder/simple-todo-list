import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

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
			<div className="list">
				<header className="list-header">
					<p>{this.props.listName}</p>
					<div className="list-action" onClick={this.addListItem}>
                        <span>
                            <i className="fas fa-plus"></i>
                        </span>
                    </div>
					<div className="list-action" onClick={this.editList}>
                        <span>
                            <i className="fas fa-pencil"></i>
                        </span>
                    </div>
					<div className="list-action" onClick={this.showMenu}>
                        <span>
                            <i className="fas fa-bars"></i>
                        </span>
                    </div>
                    <_Menu />
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
