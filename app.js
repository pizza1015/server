const express = require('express');
const cors = require('cors');
const port = 5000;


//create express (node.js) application
const app = express();
app.use(express.json(), cors());
app.use(express.urlencoded({extended: true}));

const person_router = require('./routes/person.js');
const villege_router = require('./routes/village.js');
const userph_router = require('./routes/userph.js');
app.use(person_router);
app.use(villege_router);
app.use(userph_router);


//Server listening
app.listen(port, () => {
    console.log('Server started on port ', port);
});

