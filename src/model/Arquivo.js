const { Model, DataTypes } = require ('sequelize');

class Arquivo extends Model {
    static init(sequelize){
        super.init({
            caminho: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Portfolio, { foreignKey:'id_portfolio', as: 'portfolio' })
        this.belongsTo(models.Tarefa, { foreignKey:'id_tarefa', as: 'tarefa' })
    }
}

module.exports = Arquivo;