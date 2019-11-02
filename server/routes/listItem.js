const express = require('express');
const router = express.Router();

const ListItem = require('../models/ListItem');

// create a list item
router.post('/createListItem', (req, res) => {
    let listItemData = req.body.listItemData;

    ListItem.create({
        name: listItemData.name,
        details: listItemData.details,
        listItemId: listItemData.listItemId,
        positionId: listItemData.positionId,
        isComplete: false,
        createdAt: Date.now()
    }, (err, listItems) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.send(err);
        }

        if (listItems !== null) {
            res.send(listItems);
        }
    });
});

// get all list items
router.get('/getAllListItems', (req, res) => {
    ListItem.find({}, (err, listItems) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.send(err);
        }

        if (listItems !== null) {
            res.send(listItems);
        }
    });
});

// edit list item
router.put('/editListItem/:listItemId', (req, res) => {
    let listItemId = req.params.listItemId;
    let listItemData = req.body.listItemData;
    
    ListItem.findOneAndUpdate({ listItemId: listItemId }, {
        name: listItemData.name,
        isComplete: listItemData.isComplete,
        positionId: listItemData.positionId,
        updatedAt: Date.now()
    }, (err, listItem) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        res.status(200);
        res.send(listItem);
    });
});

module.exports = router;
