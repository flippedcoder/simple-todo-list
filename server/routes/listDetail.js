const express = require('express');
const router = express.Router();

const ListItem = require('../models/ListItem');

// get list item details
router.get('/getListItemDetails/:listItemId', (req, res) => {
    let listItemId = req.params.listItemId;
    listItemId = parseInt(listItemId);

    ListItem.findOne({ listItemId: listItemId }, (err, listItem) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.send(err);
        }
        
        if (listItem !== null) {
            let details = listItem.details;
            res.send(details);
        } else {
            res.send({
                message: 'no details for this item. you really should not see this'
            });
        }
    });
});

// edit list item details
router.put('/editListItemDetails/:listItemId', (req, res) => {
    let listItemId = req.params.listItemId;
    let listItemDetails = req.body.listItemDetails;
    
    ListItem.findOneAndUpdate({ listItemId: listItemId }, {
        details: listItemDetails,
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
