var express = require('express');
var router = express.Router();
var controllerAPI = require('../controller/controllerAPI.js')

router.post("/enigmafacil",controllerAPI.getEnigmaFacil);
router.post("/enigmamedio",controllerAPI.getEnigmaMedio);
router.post("/enigmadificil",controllerAPI.getEnigmaDificil);

router.get("/comofunciona",controllerAPI.apiView)

module.exports = router;