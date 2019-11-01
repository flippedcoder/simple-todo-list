var express = require('express');
var router = express.Router();

import ListItem from '../models/ListItem';

// get list item details
router.get('/getListItemDetails/:listItemId', (req, res) => {
    let listItemId = req.params.listItemId;

    ListItem.find({ listItemId: listItemId }, (err, listItemDetails) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.send(err);
        }
        
        if (listItemDetails !== null) {
            res.send(listItemDetails);
        } else {
            res.send({
                message: 'no details for this item. you really should not see this'
            });
        }
    });
});

module.exports = router;
