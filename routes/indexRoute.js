const express = require('express')
const router = express.Router()
const homeController = require('../App/Controllers/homeController')

router.get('/', homeController.home)

module.exports = router