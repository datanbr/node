const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcom to the home page");
});

app.listen(3000, () => {
    console.log('wassa');
});

