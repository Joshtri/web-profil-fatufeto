const express = require('express');
const router = express.Router();
const berandaController = require('../controllers/beranda');

router.get('/beranda', berandaController.mainPage);


module.exports = router;