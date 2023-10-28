require('dotenv').config()
require('./config/db.js')

const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const router = require('./routes/Router')

const port = process.env.PORT

// config JSON and form-data response
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use('/', router)

app.listen(port, () => {
    console.log('App rodando na porta ' + port)
})