const express = require('express');
const controller = require('../controllers/employees');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;
