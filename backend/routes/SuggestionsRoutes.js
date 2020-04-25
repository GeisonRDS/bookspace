const express = require('express');
const router = express.Router();

const SuggestionsController = require('../controller/SuggestionsController');

router.get('/:user_id', SuggestionsController.index);

module.exports = router;
