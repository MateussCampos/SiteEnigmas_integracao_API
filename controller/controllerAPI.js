var enigmas = require("../model/enigmaMongo.js");
exports.apiView = async function (req, res) {
  res.render('apiview')

}
exports.getEnigmaFacil = async function (req, res) {
  var id = parseInt(req.body.id);
  if (id > 36) {
    while (id > 36) {
      id = parseInt(Math.random() * 100);
    }
    var r = await enigmas.obterEnigmaFacilPorIndice(id);
    var json = {
      enigma: r.enigma,
      resposta: r.resposta,
    };
    res.json(json);
  } else {
    var r = await enigmas.obterEnigmaFacilPorIndice(id);
    var json = {
      enigma: r.enigma,
      resposta: r.resposta,
    };
    res.json(json);
  }
};
exports.getEnigmaMedio = async function (req, res) {
  
  var id = parseInt(req.body.id);
  if (id > 10) {
    while (id > 10) {
      id = parseInt(Math.random() * 100);
    }
    var r = await enigmas.obterEnigmaMedioPorIndice(id);
    var json = {
      enigma: r.enigma,
      resposta: r.resposta,
    };
    res.json(json);
  } else {
    var r = await enigmas.obterEnigmaMedioPorIndice(id);
    var json = {
      enigma: r.enigma,
      resposta: r.resposta,
    };
    res.json(json);
  }
};
exports.getEnigmaDificil = async function (req, res) {
  var id = parseInt(req.body.id);
  if (id > 24) {
    while (id > 24) {
      id = parseInt(Math.random() * 100);
    }
    var r = await enigmas.obterEnigmaDificilPorIndice(id);
    var json = {
      enigma: r.enigma,
      resposta: r.resposta,
    };
    res.json(json);
  } else {
    var r = await enigmas.obterEnigmaDificilPorIndice(id);
    var json = {
      enigma: r.enigma,
      resposta: r.resposta,
    };
    res.json(json);
  }
};