var express = require('express');
var router = express.Router();
var autenticacaoController = require('../controller/autenticacaoController.js')

/* GET home page. */
router.get('/', autenticacaoController.mainPage);

router.get('/login', function(req, res, next) {
  res.render('login', { layout: false });
});

router.get('/registrar', function(req, res, next) {
  res.render('registrar', { layout: false });
});

router.get('/contato', autenticacaoController.contato)


module.exports = router;
