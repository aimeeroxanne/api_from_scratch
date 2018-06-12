const express = require('express')
const data = require('../data.json')
const router = express.Router()
const ctrl = require('../controllers/index.js')

//api get route
router.get('/', ctrl.getAll)
router.post('/', ctrl.create)

module.exports = router
