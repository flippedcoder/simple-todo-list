const express = require('express');
const router = express.Router();

const List = require('../models/List');

// add new list
router.post('/createList/', (req, res) => {
    let listData = req.body.listData;

    List.create({ 
        name: listData.name,
        createdAt: Date.now(),
        listId: listData.listId
    }, (err, newList) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        res.status(200);
        res.send(newList);
    });
});

// get list
router.get('/getListName/:listId', (req, res) => {
    let listId = req.params.listId;
    listId = parseInt(listId);

    // find list name in the database or return a not found message
    List.findOne({ listId: listId }, (err, list) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        if (list !== null) {
            res.send(list.name);
        }
        else {
            res.send('there is no list');
        }
    });
});

// edit list name
router.put('/editListName/:listId', (req, res) => {
    let listId = req.params.listId;
    let listData = req.body.listData;
    listId = parseInt(listId);

    List.findOneAndUpdate({ listId: listId }, { 
        name: listData.name,
        updatedAt: Date.now()
     }, (err, list) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        res.status(200);
        res.send(list);
    });
});

module.exports = router;
