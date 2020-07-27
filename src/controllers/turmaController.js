const Turma = require('../model/Turma');

module.exports = {
    async store(req, res){
        const { name } = req.body;
        const { id_professor } = req.params;

        const turma = await Turma.create({ name, id_professor });
        return res.json(turma);
    },

    async show(req, res){
        const { id_professor } = req.params;

        const turma = await Turma.findAll({where: { id_professor }});

        return res.json(turma);
    },

    async showAlunos(req, res){
        const { id_turma } = req.params;

        const alunos = await Turma.findByPk(id_turma, {
            include: { association: 'alunos', attributes: [ "id", "name", "email" ], through: { attributes: [] } }
        });

        return res.json(alunos.alunos);
    },
    async showTarefas(req, res){
        const { id_turma } = req.params;

        const turma = await Turma.findByPk(id_turma, {
            include: { association:'tarefas' }
        })

        return res.json(turma.tarefas)
    }
}