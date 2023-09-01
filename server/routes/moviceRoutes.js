const express = require('express');
const router = express.Router();
const moviceController = require('../controllers/moviceController');

/**
 * App Routes
 */
router.get('/api/movices/', moviceController.listMovices);
router.post('/api/movices', moviceController.insertSingleMovice);
router.patch('/api/movices/:id', moviceController.updateSingleMovice);
router.delete('/api/movices/:id', moviceController.deleteSingleMovice);

module.exports = router;