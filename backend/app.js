const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
require('dotenv').config();
require('./utils/database')

const todoRoute = require('./routes/todoRoute')

app.get('/', (req, res) => {
    res.json({
        data : "success"
    });
});

app.use('/todo', todoRoute)

app.listen(process.env.PORT, () => {
    console.log(`App Running on http://localhost:${process.env.PORT}`)
});