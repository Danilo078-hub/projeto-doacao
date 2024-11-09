const express = require('express');
const router = express.Router();
const { addInstitution, getInstitutions } = require('../controllers/institutionController');

router.post('/', addInstitution);
router.get('/', getInstitutions);

module.exports = router;
