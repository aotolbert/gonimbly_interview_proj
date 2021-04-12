const router = require('express').Router();
const weatherRoutes = require('./weather');
const pwndRoutes = require('./pwnd');
const calculatorRoutes = require('./calculator');
router.use('/weather', weatherRoutes);
router.use('/pwnd', pwndRoutes);
router.use('/calculator', calculatorRoutes);
module.exports = router;