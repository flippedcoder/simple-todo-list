const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
    name: String,
    details: String,
    listItemId: Number,
    positionId: Number,
    isComplete: Boolean,
    createdAt: Date,
    updatedAt: Date
},
{ collection : 'ListItem' });

const ListItem = mongoose.model('ListItem', listItemSchema);

module.exports = ListItem;
