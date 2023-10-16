const express = require('express');
const router = express.Router();
const petaController = require('../controllers/peta');

router.get('/peta', petaController.petaPage);


module.exports = router;