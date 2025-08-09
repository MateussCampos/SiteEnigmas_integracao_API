var express = require('express');
var router = express.Router();
var autenticacaoController = require('../controller/autenticacaoController.js')

/* GET home page. */
router.get('/', autenticacaoController.mainPage);



router.get('/contato', autenticacaoController.contato)


module.exports = router;
