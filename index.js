// npm init, npm i express. node index.js
// cài nodemon để debug npm i nodemon --save-dev
const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = true;
    var c = 'sang'
    return res.send('Hello World sang dep trai dasdsa !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})