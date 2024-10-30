const { DataTypes } = require("sequelize");
const db = require("../db/dbConnect.js");

const Task = db.define("Task", {
  tittle: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
});

module.exports = Task;