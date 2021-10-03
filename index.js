require('dotenv').config();
const express = require('express');
const app = express();
const port = 8080;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get('/login', (req, res) => {
    res.send('Login to Spotify');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});