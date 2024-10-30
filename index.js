const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const connect = require("./db/dbConnect");
const Task = require("./models/Task");

// Configurando o motor de template Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Middlewares para processar dados de formulários, analisar requisições em formato JSON e servir arquivos estáticos da pasta "public".
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Função para iniciar o servidor
const startServer = async () => {
  try {
    await connect.sync(); // Sincroniza os modelos com o banco de dados
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  } catch (error) {
    console.error(`Erro ao iniciar o servidor: ${error}`);
  }
};

// Inicia o servidor
startServer();
