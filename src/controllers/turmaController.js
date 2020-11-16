const Turma = require('../model/Turma');
const User = require ('../model/User');

module.exports = {
    async store(req, res){
        const { name } = req.body;
        const { id_professor } = req.params;

        const user = await User.findByPk(id_professor);
        if(user){
            const turma = await Turma.create({ name, id_professor });
            return res.json(turma);
        } else {
            return res.status(400).json({error: 'Ocorreu um problema: '})
        }
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