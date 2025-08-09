const express = require('express');
const router = express.Router();
const contatoController = require('../controller/contatoController');


router.post('/enviar-email', contatoController.enviarContato);

module.exports = router;