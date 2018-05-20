const express = require('express');
const router = express.Router();
const toDoList = require('../models/schema');

router.get('/', (req, res) => {
    toDoList.getAllLists((err, lists) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
            res.end();
        }
    });
})

module.exports = router;