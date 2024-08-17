const express = require('express');
const {createGroupMessage,actionOnMessage,groupMessageById}= require('../controllers/message.controller')


const router = express.Router();

router.get('/',groupMessageById);

router.post('/', createGroupMessage)

router.patch('/', actionOnMessage)


module.exports = router