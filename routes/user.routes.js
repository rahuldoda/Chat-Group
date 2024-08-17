const express = require('express');
const {getAllUsers,createUsers,login,editUsers,searchUsers}= require('../controllers/user.controller')


const router = express.Router();

router.get('/',getAllUsers);

router.post('/', createUsers)

router.post('/login', login)

router.patch('/', editUsers)
router.get('/search', searchUsers)

module.exports = router