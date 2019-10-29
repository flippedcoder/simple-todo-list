import mongoose from 'mongoose';

const listItemSchema = new mongoose.Schema({
    name: String,
    details: String,
    id: Number,
    positionId: Number,
    isComplete: Boolean,
    createdAt: Date,
    updatedAt: Date
});

const ListItem = mongoose.model('ListItem', listItemSchema);

export default ListItem;
