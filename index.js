const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const connect = require("./db/dbConnect.js");

// Configurando o motor de template Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Configura o middleware para análise de JSON nas requisições
app.use(express.json());

// Servindo arquivos estáticos
app.use(express.static("public"));

app.listen(3000);
