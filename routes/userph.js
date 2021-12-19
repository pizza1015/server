const express = require('express');
const conn = require('../utils/dbconnect.js');
const router = express.Router();

//show all userph
router.get('/api/userph', (req, res) => {
    let sql = "SELECT * FROM user ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.post('/api/userph', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    conn.query(
        "SELECT * FROM userph WHERE USERNAME = ? AND PASSWORD = ?",
        [username,password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }

            if (result) {
                res.send(reult);
            } else {
                res.send({ message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"});
            }
        }
    )
})
module.exports = router