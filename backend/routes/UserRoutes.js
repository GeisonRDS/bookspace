const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.get('/search/:search', UserController.search);
router.post('/', UserValidation, UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
