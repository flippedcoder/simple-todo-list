import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';

import '../assets/ListItem.css';

import ListItemDetails from './ListItemDetails';

class ListItem extends Component {
    constructor() {
        super();

        this.completed = <FontAwesomeIcon icon={faExclamation} className="list-item-action" />;
        this.listItemDetails = <div>No list item details to show. Add some.</div>;

        this.checkListItemCompleted = this.checkListItemCompleted.bind(this);
        this.showListDetails = this.showListDetails.bind(this);
    }

    componentDidMount() {
        this.checkListItemCompleted();
    }

    checkListItemCompleted() {
        if (this.props.item.isComplete) {
            this.completed = <FontAwesomeIcon icon={faCheck} className="list-item-action" />;
        } else {
            this.completed = <FontAwesomeIcon icon={faExclamation} className="list-item-action" />;
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
                <div className="list-item-row">
                    <div className="action-item-icons" onClick={this.showListDetails(this.props.item)}>{this.props.item.name}</div>
                    <div className="action-item-icons">{this.completed}</div>
                    <div className="action-item-icons">
                        <FontAwesomeIcon icon={faAngleUp}
                            className="list-item-action" />
                        <FontAwesomeIcon icon={faAngleDown}
                            className="list-item-action" />
                    </div>
                </div>
                {/* {this.listItemDetails} */}
            </div>
        );
    }
}

export default ListItem;
