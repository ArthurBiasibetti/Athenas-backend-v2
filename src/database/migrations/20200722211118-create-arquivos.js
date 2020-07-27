'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('arquivos', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_portfolio:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'portfolios', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_tarefa:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'tarefas', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      caminho:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('arquivos')
  }
};
