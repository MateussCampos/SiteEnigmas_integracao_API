const express = require('express');
const router = express.Router();
const contatoController = require('../controller/contatoController');

router.post('/contato', contatoController.enviarContato);

module.exports = router;