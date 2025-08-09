var session = require('express-session'); // Sessão para controle de usuários
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var rotasEnigma = require("./routes/rotasEnigma");
var rotasAPI = require("./routes/rotasAPI");
var rotasContato = require("./routes/rotasContato")
var autenticacaoRotas = require('./routes/rotasAutenticacao');
var userRotas = require('./routes/rotasUser');
var { checarUsuarioAutenteicado }= require('./middlewares/auth.js');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));


app.use(session({
  secret: 'umaChaveSecretaAqui',  // coloque uma chave secreta forte
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }  // se for HTTPS coloque true, caso contrário false
}));

app.use(bodyParser.json());


app.use("/", indexRouter);
app.use("/enigma", checarUsuarioAutenteicado, rotasEnigma);
app.use("/api",rotasAPI);
app.use("/", rotasContato);
app.use('/auth', autenticacaoRotas);
app.use('/', userRotas);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
