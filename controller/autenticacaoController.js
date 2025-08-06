exports.login = (req, res) => {
  res.render("autenticacao/login");
};

exports.mainPage = (req, res) => {
  res.render("index");
};
exports.contato = async (req,res)=>{


  res.render('contato')
}