const express = require('express');
const router = express.Router();

const RentalController = require('../controller/RentalController');
const RentalValidation = require('../middlewares/RentalValidation');

router.get('/', RentalController.index);
router.get('/:id', RentalController.show);
router.get('/rented/:option', RentalController.rentedLate);
router.get('/search/:search', RentalController.search);
router.post('/', RentalValidation, RentalController.create);
router.put('/:id', RentalController.update);
router.delete('/:id', RentalController.delete);

module.exports = router;
