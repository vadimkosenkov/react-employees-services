const express = require('express');
const controller = require('../controllers/role');
const router = express.Router();

router.patch('/:id', controller.setRole);

module.exports = router;
