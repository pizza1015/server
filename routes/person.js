const express = require('express');
const conn = require('../utils/dbconnect.js');
const router = express.Router();

//show all person
router.get('/api/person', (req, res) => {
    let sql = "SELECT * FROM person ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//show single person
router.get('/api/person/:id', (req, res) => {
    let sql = "SELECT * FROM person WHERE 	Cid=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//insert (post) data into the person
router.post('/api/person', (req, res) => {
    let data = {
        //ID_NUM: req.body.ID_NUM,
        Cid: req.body.Cid,
        HN: req.body.HN,
        Title: req.body.Title,
        Name: req.body.Name,
        Lname: req.body.Lname,
        Address: req.body.Address,
        Moo: req.body.Moo,
        Tambon: req.body.Tambon,
        Amphur: req.body.Amphur,
        Dead: req.body.Dead,
        Dead_date: req.body.Dead_date,
        Birthdate: req.body.Birthdate,
        TEL: req.body.TEL,
        TY_Area: req.body.TY_Area,
        D_update: req.body.D_update,
        Vid: req.body.Vid,
    };
    let sql = "INSERT INTO person SET ?";
    //let sql1 = "INSERT INTO person ('D_update') VALUES (current_timestamp())"
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//update (PUT) data into the person
router.put('/api/person/:id', (req, res) => {
    let sql = "UPDATE person SET Cid = '" + req.body.Cid+
        "', HN ='" + req.body.HN + 
        "' , Title ='" + req.body.Title + 
        "', Name = '" + req.body.Name + 
        "', Lname ='" + req.body.Lname + 
        "' , Address ='" + req.body.Address + 
        "', Moo = '" + req.body.Moo + 
        "', Tambon ='" + req.body.Tambon + 
        "', Amphur ='" + req.body.Amphur + 
        "', Dead = '" + req.body.Dead + 
        "', Dead_date ='" + req.body.Dead_date + 
        "', Birthdate ='" + req.body.Birthdate + 
        "', TEL ='" + req.body.TEL + 
        "', TY_Area ='" + req.body.TY_Area + 
        "', D_update = '" + req.body.D_update + 
        "', Vid ='" + req.body.Vid + 
        "'WHERE Cid=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

// delete data into the person
router.delete('/api/person/:id', (req, res) => {
    let sql = "DELETE FROM person WHERE Cid =" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;