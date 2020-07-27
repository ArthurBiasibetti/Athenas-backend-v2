const { Model, DataTypes } = require ('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: {
              type: DataTypes.STRING,
              validate: {
                  isEmail: true,
              }
            },
            password: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Turma, { foreignKey: 'id_professor', as: 'professor' });
        this.belongsToMany(models.Turma, { foreignKey: 'aluno_id', through: 'aluno_turma', as: 'turmas'  })
        this.hasMany(models.Portfolio, { foreignKey: 'id', as: 'portfolio' });
    }

}

module.exports = User