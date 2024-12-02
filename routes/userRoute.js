const express = require('express')
const { loginController, registerController } = require('../controllers/userController')
 

const router = express.Router()

// routes
// LOGIG || POST
router.post('/login', loginController)
// REGISTER || POST
router.post('/register', registerController)



module.exports = router