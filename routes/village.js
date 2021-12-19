const express = require('express');
const conn = require('../utils/dbconnect.js');
const router = express.Router();

//show all village
router.get('/api/village', (req, res) => {
    let sql = "SELECT * FROM village ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;