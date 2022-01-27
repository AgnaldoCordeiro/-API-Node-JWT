const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/app/controllers/index')(app);

app.listen(3001, () => console.log("Server online"));