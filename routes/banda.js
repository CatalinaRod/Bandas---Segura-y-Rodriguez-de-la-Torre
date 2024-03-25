const express = require('express');
const router = express.Router();
// const db = require('../db/index')
const bandasController = require('../controllers/bandasController');

router.get('/id/:id', bandasController.id); 

router.get('/genero/:genero', bandasController.genero); 

module.exports = router;