const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/info', pokeneaController.getInfo);
router.get('/image', pokeneaController.getImage);

module.exports = router;