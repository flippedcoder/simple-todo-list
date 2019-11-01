var express = require('express');
var router = express.Router();

import ListItem from '../models/ListItem';

// get all list items
router.get('/getAllListItems', (req, res) => {
    let allListItems = ListItem.find({}, (err, listItems) => {
        return listItems;
    });

    if (allListItems !== null) {
        res.send(allListItems);
    }
});

// edit list item
router.put('/editListItem/:listItemId', (req, res) => {
    let listItemId = req.params.listItemId;
    let listItemEdits = req.body.data;
    
    List.updateOne({ id: listItemId }, (err, listItem) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        if (listItemEdits !== null) {
            listItem.name = listItemEdits.name !== '' ? listItemEdits.name : listItem.name;
            listItem.details = listItemEdits.details !== '' ? listItemEdits.details : listItem.details;
            listItem.status = listItemEdits.status !== '' ? listItemEdits.status : listItem.status;
            listItem.position = listItemEdits.position !== '' ? listItemEdits.position : listItem.position;
        }

        return res.status(200);
    });
});

module.exports = router;
