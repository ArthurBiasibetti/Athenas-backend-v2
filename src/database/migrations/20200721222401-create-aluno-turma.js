'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('aluno_turma', { 
        aluno_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        turma_id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: { model: 'turmas', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
      },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('aluno_turma');
  }
};
