'use strict';

const { sequelize } = require("../../model/User");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tarefas', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_turma:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'turmas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      peso_nota:{
        type: Sequelize.FLOAT,
        allowNull: false
      },
      data_entrega:{
        type: Sequelize.DATE,
        allowNull: false
      }
      ,
      descricao:{
        type: Sequelize.STRING,
        allowNull: true
      },
      prioridade:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tarefas')
  }
};
