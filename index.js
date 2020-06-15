const express = require('express');
const Well = require('./well');

const well = new Well();
const app = express();

app.get('/', (req, res) => {
    res.send(JSON.stringify(well.getValues()));
});

app.listen(3000, () => console.log('App listening on port 3000!'));
