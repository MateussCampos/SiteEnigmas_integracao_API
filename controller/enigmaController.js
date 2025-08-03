const enigmaMongo = require('../model/enigmaMongo.js');

exports.mostrarTudo = async function (req, res) {
  try {
    const enigmas = await enigmaMongo.obterTodosEnigmas();
    res.render('mostrar', { enigmas });
  } catch (error) {
    console.error('Erro ao carregar enigmas:', error);
    res.status(500).send('Erro ao carregar enigmas');
  }
};

exports.mostrarEngimaFacil = async function (req, res) {

  const indice = parseInt(req.params.indice); 
  const enigma = await enigmaMongo.obterEnigmaFacilPorIndice(indice);

  var contexto =
  {
    title: "Enigma Fácil",
    enigma: enigma.enigma || null,
    resposta: enigma.resposta || null,
    mensagem: enigma.mensagem || null,
    proxima_rota: "/enigma/facil/" + (indice + 1),
    tentar_novamente: "/enigma/facil/1",
    proximo_nivel: "/enigma/medio/1",
    texto_botao_proximo_nivel: "Nível Médio"
  };

  res.render('enigmas', contexto);

}
exports.mostrarEnigmaMedio = async function (req, res) {

  const indice = parseInt(req.params.indice); 
  const enigma = await enigmaMongo.obterEnigmaMedioPorIndice(indice);

  var contexto =
  {
    title: "Enigma Médio",
    enigma: enigma.enigma || null,
    resposta: enigma.resposta || null,
    mensagem: enigma.mensagem || null,
    proxima_rota: "/enigma/medio/" + (indice + 1),
    tentar_novamente: "/enigma/medio/1",
    proximo_nivel: "/enigma/dificil/1",
    texto_botao_proximo_nivel: "Nível Difícil"
  };

  res.render('enigmas', contexto);

}
exports.mostrarEngimaDificil = async function (req, res) {

  const indice = parseInt(req.params.indice); 
  const enigma = await enigmaMongo.obterEnigmaDificilPorIndice(indice);

  var contexto =
  {
    title: "Enigma Difícil",
    enigma: enigma.enigma || null,
    resposta: enigma.resposta || null,
    mensagem: enigma.mensagem || null,
    proxima_rota: "/enigma/dificil/" + (indice + 1),
    tentar_novamente: "/enigma/dificil/1",
    proximo_nivel: "/enigma/fim",

    texto_botao_proximo_nivel: "Fim de Jogo"
  };

  res.render('enigmas', contexto);

}

exports.parabens = async function (req, res) {
  res.render('parabens')
}