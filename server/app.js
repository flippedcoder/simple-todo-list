const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

let listRouter = require('./routes/list');
let listDetailRouter = require('./routes/listDetail');
let listItemRouter = require('./routes/listItem');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/todo_list', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection successful");
});

app.listen(3010, () => {
    console.log("todo endpoints running on port 3010");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/list', listRouter);
app.use('/listDetail', listDetailRouter);
app.use('/listItem', listItemRouter);

app.get('/', (req, res) => {
    res.send('the backend works. check your front-end crap.');
});