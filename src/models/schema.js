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

module.exports.getAllLists = (callback) => {
	ToDoList.find(callback);
}

module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    ToDoList.remove(query, callback);
}