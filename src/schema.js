const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    category: {
        type: String,
        require: true
    }
});

const ToDoList = module.exports = mongoose.model('ToDoList', ToDoSchema);