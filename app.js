const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Hello from the get req of homepage..")
})

app.post('/', (req, res) => {
    res.status(200).send("Hello from the post req of homepage...")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})