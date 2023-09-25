const express = require('express');
const cluster = require("node:cluster");
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    console.time('Request received');
    const baseNumber = 7;
    let result = 0;
    for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
        result += Math.atan(i) * Math.tan(i);
    }
    res.send({
        result
    })
    console.log(`Process: ${process.pid} finished the request`)
    console.timeEnd('Request received');
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port} with process id ${process.pid} `)
);