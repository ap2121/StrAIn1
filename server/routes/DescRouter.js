const router = require('express').Router()
const controller = require('../controllers/DescController')

router.post('/newdesc/:email', controller.CreateDescription)
router.post('/deletedesc/:id', controller.deleteDescription)
router.get('/mydesc/:email', controller.getDescriptions)
router.get('/getdesc/:id', controller.getDescriptionById)
router.get('/newabout', controller.createAbout)
module.exports = router