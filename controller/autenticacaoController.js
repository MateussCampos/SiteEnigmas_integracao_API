require("dotenv").config();
const axios = require("axios");
var enigmas = require('../model/enigmaMongo.js');

exports.login = (req, res) => {
  res.render("autenticacao/login");
};

exports.mainPage = (req, res) => {
  enigmas.inserirEnigmas();
  res.render("index");
};

exports.contato = async (req, res) => {
  res.render('contato');
};

// ======================
// Google OAuth
// ======================

exports.loginGoogle = (req, res) => {
  const redirect_uri = "http://localhost:3000/auth/google/callback";
  const scope = [
    "openid",
    "profile",
    "email"
  ].join(" ");
  
  const auth_url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=${scope}`;
  
  res.redirect(auth_url);
};

exports.googleCallback = async (req, res) => {
  const code = req.query.code;
  const redirect_uri = "http://localhost:3000/auth/google/callback";

  try {
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri,
      grant_type: "authorization_code"
    });

    const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
      headers: {
        Authorization: `Bearer ${tokenRes.data.access_token}`
      }
    });

    req.session.user = userInfo.data;
    res.redirect("/profile");

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.redirect("/");
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
