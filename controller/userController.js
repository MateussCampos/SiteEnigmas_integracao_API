const userModel = require('../model/userMongo.js');

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
    foto: req.session.user.picture,
    id_google: req.session.user.id_google,
    email_verificado: (req.session.user.email_verified) ? "Sim" : "Não",
    localizacao: req.session.user.locale,
    ultimo_login: ultimoLoginData ? diferencaEmMinutos(ultimoLoginData) : "Data não disponível",
    nickname: req.session.user.nickname

  };

  res.render('profile', contexto);
}

exports.alterarNickname = async (req, res) => {
  const { id, nickname } = req.body;

  // Atualiza o nickname no banco
  const usuarioAtualizado = await userModel.atualizarNicknamePeloId(id, nickname);

  if (usuarioAtualizado) {
    // Atualiza o nickname na sessão
    if (req.session && req.session.user) {
      req.session.user.nickname = nickname;
    }

    // Recarrega a página com TODOS os dados do usuário + mensagem de sucesso
    const contexto = {
      title: "Perfil",
      id: req.session.user.id,
      nome: req.session.user.name,
      email: req.session.user.email,
      foto: req.session.user.picture,
      id_google: req.session.user.id_google,
      email_verificado: req.session.user.email_verified ? "Sim" : "Não",
      localizacao: req.session.user.locale,
      ultimo_login: req.session.user.ultimo_login 
        ? diferencaEmMinutos(req.session.user.ultimo_login) 
        : "Data não disponível",
      nickname: nickname, // Novo nickname
      alerta: "Nickname alterado com sucesso!" // Mensagem de sucesso
    };

    res.render('profile', contexto); // Renderiza com todos os dados
  } else {
    // Se der erro, mantém os dados atuais e mostra mensagem de erro
    const contexto = {
      title: "Perfil",
      id: req.session.user.id,
      nome: req.session.user.name,
      email: req.session.user.email,
      foto: req.session.user.picture,
      id_google: req.session.user.id_google,
      email_verificado: req.session.user.email_verified ? "Sim" : "Não",
      localizacao: req.session.user.locale,
      ultimo_login: req.session.user.ultimo_login 
        ? diferencaEmMinutos(req.session.user.ultimo_login) 
        : "Data não disponível",
      nickname: req.session.user.nickname, // Mantém o nickname antigo
      alerta: "Não foi possível alterar o nickname." // Mensagem de erro
    };
    res.render('profile', contexto);
  }
};

exports.deletarConta =  async (req, res) => {
  
  const usario_deletado = await userModel.deletarUsuarioPeloId(req.body.id);

  if(usario_deletado)
      res.render('index', { alerta: "Usuário deletado com sucesso!" });
  else
    res.render('/profile', { alerta: "Não foi possível deletar" });



};


function diferencaEmMinutos(dataISO) {
  const dataInformada = new Date(dataISO);
  const agora = new Date();

  const diffMs = agora - dataInformada;

  const diffMinutos = Math.floor(diffMs / 60000);

  return diffMinutos;
}