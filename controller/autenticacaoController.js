require("dotenv").config();
const axios = require("axios");
var enigmas = require("../model/enigmaMongo.js");
const userModel = require("../model/userMongo.js");

exports.login = (req, res) => {
  res.render("autenticacao/login");
};

var popularBanco = false;

exports.mainPage = (req, res) => {
  if (!popularBanco) {
    enigmas.inserirEnigmas();
    popularBanco = true;
  }


  res.render("index");
};

exports.contato = async (req, res) => {
  res.render("contato");
};

// Autenticação com o google

exports.loginGoogle = (req, res) => {
  const redirect_uri = "http://localhost:3000/auth/google/callback";
  const scope = ["openid", "profile", "email"].join(" ");

  const auth_url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=${scope}`;

  res.redirect(auth_url);
};

exports.googleCallback = async (req, res) => {
  const code = req.query.code;
  const redirect_uri = "http://localhost:3000/auth/google/callback";

  const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri,
    grant_type: "authorization_code",
  });

  const userInfo = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo`, {
      headers: {
        Authorization: `Bearer ${tokenRes.data.access_token}`,
      },
    }
  );

  // salva ou atualiza usuário no Mongo
  const user = await userModel.upsertUser(userInfo.data);

  // salva na sessão os dados do usuário do banco, com _id
  req.session.user = {
    id: user._id,
    name: user.name,
    email: user.email,
    picture: user.picture,
    id_google: user.googleId,
    localizacao: user.locale,
    email_verificado: user.email_verified,
    ultimo_login: user.updatedAt,
    nickname: user.nickname,
  };

  console.log(user);
  req.session.save((err) => {
    if (err) {
      console.error("Erro ao salvar sessão:", err);
    }
    res.redirect("/profile");
  });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};