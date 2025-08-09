var express = require('express');
var router = express.Router();
var userController = require('../controller/userController.js')

router.post('/auth/deletar/conta', userController.deletarConta)

router.post('/alterar/nickname', userController.alterarNickname);

module.exports = router;