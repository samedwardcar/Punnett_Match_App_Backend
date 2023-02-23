const express = require('express')
const app = express()

app.get('/client/Home.js', (req, res) => {
    res.render('Home')
})
app.get('./client/primarily.js', (req, res) => {
    res.render('Primary')
})


app.listen(process.env.PORT)