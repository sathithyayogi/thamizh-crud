require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const list = require('./routes/list')
app.use('/list',list)


app.listen(8080, err => {
    console.log(`Server listening `);
});


app.get('/', async function (req, res) {
    res.send("....");
})
