var express = require('express');
var router = express.Router();

var controllerEnigma = require('../controller/enigmaController')


/* GET Altera status da Nota para não lida. */
router.get('/mostrar', controllerEnigma.mostrarTudo);

router.get('/facil/:indice', controllerEnigma.mostrarEngimaFacil);
router.get('/medio/:indice', controllerEnigma.mostrarEnigmaMedio);
router.get('/dificil/:indice', controllerEnigma.mostrarEngimaDificil);
router.get('/fim', controllerEnigma.parabens)


module.exports = router;
