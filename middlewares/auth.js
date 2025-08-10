function checarUsuarioAutenteicado(req, res, next) {
  if (req.session && req.session.user) {
    // usuário está autenticado, deixa passar
    next();
  } else {
    // não autenticado, redireciona para login
    res.redirect('/login'); 
  }
}

module.exports = { checarUsuarioAutenteicado };
