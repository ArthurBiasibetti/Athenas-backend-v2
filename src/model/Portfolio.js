const { Model, DataTypes } = require ('sequelize');

class Portfolio extends Model {
    static init(sequelize){
        super.init({      
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_aluno', as: 'user' });
        this.belongsTo(models.Turma, { foreignKey: 'id_turma', as: 'turma' });
        this.hasMany(models.Arquivo, { foreignKey: 'id', as: 'arquivo' })
    }
}

module.exports = Portfolio;