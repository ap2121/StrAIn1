const router = require('express').Router()
const DescRouter = require('./DescRouter')


router.use('/desc', DescRouter)


module.exports = router
