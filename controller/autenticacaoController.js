var enigmas = require('../model/enigmaMongo.js')

exports.login = (req, res) => {
  res.render("autenticacao/login");
};

exports.mainPage = (req, res) => {
  enigmas.inserirEnigmas()
  res.render("index");
};
exports.contato = async (req,res)=>{


  res.render('contato')
}