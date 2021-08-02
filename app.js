const express = require('express');
const app = express();
const port = process.env.port || 3000;  


app.get('/', (req, res) => {
    res.send("Welcom to the home page");
});

app.listen(port, () => {
    console.log('wassa');
});

