var express = require('express');
var router = express.Router();
// const db = require('../db/index')
const bandasController = require('../controllers/bandasController');

/* GET home page. */
router.get('/', bandasController.index);
  

module.exports = router;
