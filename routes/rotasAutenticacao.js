var express = require('express');
var router = express.Router();

var authController = require('../controller/autenticacaoController');


router.get('/google', authController.loginGoogle);
router.get('/google/callback', authController.googleCallback);
router.get('/logout', authController.logout);

module.exports = router;
