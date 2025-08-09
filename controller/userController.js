exports.mostrarPerfil = async function (req, res) {
  if (!req.session || !req.session.user) {
    return res.redirect('/auth/login');
  }

    const ultimoLoginData = req.session.user.ultimo_login; 
  var contexto = {
    title: "Perfil",
    id: req.session.user.id,
    nome: req.session.user.name,
    email: req.session.user.email,
    foto:  req.session.user.picture,
    id_google: req.session.user.id_google,
    email_verificado: (req.session.user.email_verified)?"Sim": "Não",
    localizacao: req.session.user.locale,
    ultimo_login: ultimoLoginData ? diferencaEmMinutos(ultimoLoginData) : "Data não disponível"

  };

  res.render('profile', contexto);
}

function diferencaEmMinutos(dataISO) {
  const dataInformada = new Date(dataISO);
  const agora = new Date();

  const diffMs = agora - dataInformada;

  const diffMinutos = Math.floor(diffMs / 60000);

  return diffMinutos;
}

