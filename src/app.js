const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const todoList = require('./controllers/to-do-list');

const app = express();

mongoose.connect(config.database);

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Invalid Page");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);    
});

app.use('./to-do-list', todoList);