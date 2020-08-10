const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('sup ??')
});

app.listen(8083, () => {
    console.log("Listening on 8083");
})