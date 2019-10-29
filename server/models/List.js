import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    name: String,
    id: Number,
    createdAt: Date,
    updatedAt: Date
});

const List = mongoose.model('List', listSchema);

export default List;
