const express = require('express');
const {getAllGroups,createGroup,editGroup,deleteGroup}= require('../controllers/group.controller')
router = express.Router();


router.get('/', getAllGroups)

router.post('/', createGroup)
router.patch('/', editGroup)
router.delete('/', deleteGroup)



module.exports = router