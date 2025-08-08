var enigmas = require("../model/enigmaMongo.js");
exports.apiView = async function (req,res) {
    res.render('apiview')
    
}
exports.getEnigmaFacil = async function (req, res) {
  var id = parseInt(req.body.id);
  if (id > 43) {
    while (id > 43) {
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
  if (id > 12) {
    while (id > 12) {
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
exports.getEnigmaDificil = async function (req, res) {
  var id = parseInt(req.body.id);
if (id > 25) {
    while (id > 25) {
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
