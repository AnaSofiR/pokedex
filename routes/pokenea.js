const express = require('express');
const router = express.Router();

router.get('/info', (require('../controllers/pokeneaController')).getInfo);
router.get('/image', (require('../controllers/pokeneaController')).getImage);

module.exports = router;