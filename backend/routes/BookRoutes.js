const express = require('express');
const router = express.Router();

const BookController = require('../controller/BookController');
const BookValidation = require('../middlewares/BookValidation');

router.get('/', BookController.index);
router.get('/:id', BookController.show);
router.get('/search/:search', BookController.search);
router.post('/', BookValidation, BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.delete);

module.exports = router;
