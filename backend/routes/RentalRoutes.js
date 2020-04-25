const express = require('express');
const router = express.Router();

const RentalController = require('../controller/RentalController');

router.get('/', RentalController.index);
router.get('/:id', RentalController.show);
router.get('/rented/:option', RentalController.rentedLate);
router.get('/search/:search', RentalController.search);
router.post('/', RentalController.create);
router.put('/:id', RentalController.update);
router.delete('/:id', RentalController.delete);

module.exports = router;
