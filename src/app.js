const news = require('./news')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'hbs')
app.get('/', (req, res) => {
    news((error, data) => {
        if(error) {
            return res.send({error})
        }
        res.render('index', {
            data
        })
    })
})
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})