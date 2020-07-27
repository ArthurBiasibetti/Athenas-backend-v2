const { Model, DataTypes } = require ('sequelize');

class Tarefa extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            peso_nota: DataTypes.FLOAT,
            data_entrega: DataTypes.DATE,
            descricao: DataTypes.STRING,
            prioridade: DataTypes.INTEGER
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Turma, {foreignKey:'id', as: 'turma'});
        this.hasMany(models.Arquivo, { foreignKey: 'id', as: 'arquivo' })
    }
}

module.exports = Tarefa;
