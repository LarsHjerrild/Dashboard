var express = require('express')
var router = express.Router();
var examplecontroller = require('../controllers/examplecontroller')

router.route('/').get(examplecontroller.getentry)
router.route('/model').get(examplecontroller.getModelitem)
router.route('/model').post(examplecontroller.postModelitem)

module.exports = router;