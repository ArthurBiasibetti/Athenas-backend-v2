const Tarefa = require('../model/Tarefa');

module.exports = {
    async store(req, res){
        const {name, peso_nota, data_entrega, descricao, prioridade} = req.body;
        const { id_turma } = req.params;
        
         const tarefa = await Tarefa.create({ id_turma, name, peso_nota, data_entrega, descricao, prioridade });

        return res.json(tarefa);   
    },
    async show(req, res){
        const tarefa = await Tarefa.findAll();

        return res.json(tarefa);
    },
}