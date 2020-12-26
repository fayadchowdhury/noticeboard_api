const express = require('express')
const router = express.Router();
const { adminRegister, adminLogin } = require('../controllers/adminController')

router.post('/register', adminRegister)
router.post('/login', adminLogin)

module.exports = router;