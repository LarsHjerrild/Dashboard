var express = require('express')
var router = express.Router();
var examplecontroller = require('../controllers/examplecontroller')

router.route('/').get(examplecontroller.getentry)
router.route('/model').get(examplecontroller.getModelitem)
router.route('/model').post(examplecontroller.postModelitem)
router.route('/model/:id').put(examplecontroller.updateModelitem)
router.route('/model/:id').delete(examplecontroller.deleteModelitem)

module.exports = router;