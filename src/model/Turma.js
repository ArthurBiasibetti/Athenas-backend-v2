const { Model, DataTypes } = require ('sequelize');

class Turma extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
        this.belongsToMany(models.User, { foreignKey: 'turma_id', through: 'aluno_turma', as: 'alunos' })
        this.hasMany(models.Tarefa, {foreignKey: 'id_turma', as: 'tarefas'})
        this.hasMany(models.Portfolio, { foreignKey: 'id', as: 'portfolio' });
    }
}

module.exports = Turma