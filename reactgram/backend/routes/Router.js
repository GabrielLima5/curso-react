const express = require('express')
const router = express.Router()
const userRoutes = require('./UserRoutes')
const photoRoutes = require('./PhotoRoutes')

router.use('/api/users', userRoutes)
router.use('/api/photos', photoRoutes)

router.get('/', (req, res) => {
    res.send('API working.')
})

module.exports = router