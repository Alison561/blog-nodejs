const express = require('express')
const router = express.Router()

// controllers
const homeController = require('../App/Controllers/homeController')
const userController = require('../App/Controllers/userController')

router.get('/', homeController.home)

router.get('/login',userController.login)
router.post('/login',userController.login)

module.exports = router