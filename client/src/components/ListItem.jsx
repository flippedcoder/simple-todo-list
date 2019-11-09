import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';

import '../assets/ListItem.css';

import ListItemDetails from './ListItemDetails';

class ListItem extends Component {
    constructor() {
        super();

        this.completed = <FontAwesomeIcon icon={faExclamation} className="list-item-action" />;

        this.state = {
            showDetails: null
        };

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

    showListDetails() {
        let listItem = this.props.item;
        if (listItem !== null) {
            this.setState({
                showDetails: true
            });
        }
    }

    render() {
        let listItem = this.props.item;
        let listItemDetails = null;

        if (this.state.showDetails) {
            listItemDetails = <ListItemDetails listItem={listItem} isModalOpen={true} />;
        }

        return (
            <div className="list-item">
                <div className="list-item-row">
                    <div className="action-item-icons"
                         onClick={this.showListDetails}>
                         {this.props.item.name}
                    </div>
                    <div className="action-item-icons">{this.completed}</div>
                    <div className="action-item-icons">
                        <FontAwesomeIcon icon={faAngleUp}
                            className="list-item-action" />
                        <FontAwesomeIcon icon={faAngleDown}
                            className="list-item-action" />
                    </div>
                </div>
                {listItemDetails}
            </div>
        );
    }
}

export default ListItem;
