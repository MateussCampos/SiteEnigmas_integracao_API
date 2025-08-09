var express = require('express');
var router = express.Router();
var autenticacaoController = require('../controller/autenticacaoController.js')
var userController = require('../controller/userController.js')

/* GET home page. */
router.get('/', autenticacaoController.mainPage);


router.get('/contato', autenticacaoController.contato),
router.get('/profile', userController.mostrarPerfil),
router.get('/alterar', userController.alterarNickname)


module.exports = router;
