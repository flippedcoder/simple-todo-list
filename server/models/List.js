const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: String,
    listId: Number,
    createdAt: Date,
    updatedAt: Date
},
{ collection : 'List' });

const List = mongoose.model('List', listSchema);

module.exports = List;
