const Sequelize = require ('sequelize');
const dbConfig = require ('../config/dbConfig');

const User = require('../model/User');
const Turma = require('../model/Turma');
const Tarefa = require('../model/Tarefa');
const Portfolio = require('../model/Portfolio');
const Arquivo = require('../model/Arquivo');

const connection = new Sequelize(dbConfig);

User.init(connection);
Turma.init(connection);
Tarefa.init(connection);
Portfolio.init(connection);
Arquivo.init(connection);


User.associate(connection.models);
Turma.associate(connection.models);
Tarefa.associate(connection.models);
Portfolio.associate(connection.models);
Arquivo.associate(connection.models);



module.exports = connection;