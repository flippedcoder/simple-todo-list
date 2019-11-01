var express = require('express');
var router = express.Router();

import List from '../models/List';

// get list name
router.get('/getListName/:listId', (req, res) => {
    let listId = req.params.listId;

    // find list name in the database or return a not found message
    let list = List.findOne({ id: listId }, (err, res) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        return res;
    });

    if (list !== null) {
        res.send(list.name);
    }
});

// edit list name
router.put('/editListName/:listId', (req, res) => {
    let listId = req.params.listId;

    List.updateOne({ id: listId }, (err, res) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        return res.status(200);
    });
});

module.exports = router;
