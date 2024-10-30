const { Sequelize } = require("sequelize");

// Cria uma nova instância do Sequelize para se conectar ao banco
const sequelize = new Sequelize("nodemvc", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
});

// Função assíncrona para conectar ao banco
const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conetamos ao MySQL!");
  } catch (error) {
    console.log(`Não foi possível conectar: ${error}`);
  }
};

// Chama a função para estabelecer a conexão com o banco
connectDatabase();

module.exports = sequelize;
