const express = require('express');
const router = express.Router();

const LoginController = require('../controller/LoginController');

router.post('/', LoginController.index);
router.put('/', LoginController.update);

module.exports = router;
