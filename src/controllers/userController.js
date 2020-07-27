const User = require ('../model/User');
const Turma = require ('../model/Turma');
const Portfolio = require ('../model/Portfolio');

module.exports = {
    async store(req, res){
        const { name, email, password } = req.body;

        const user = await User.create({ name, email, password })
        .then((user)=>{return res.json(user)})
        .catch((err)=>{return res.json("O correu erro")});

    },

   async show(req, res){
       const user = await User.findAll();

       return res.json(user);
   },

   async showTarefas(req, res){
        const { id_aluno } = req.params;
        const user = await User.findByPk(id_aluno, {  
            attributes: [ "id", "name", "email" ],
            include: { 
                association: 'turmas',
                attributes:[ 'id', 'name', 'id_professor' ],  
                through: { attributes: [] }, 
                include: { 
                    association: 'tarefas', 
                    attributes: [ 'id', 'name', 'peso_nota', 'data_entrega', 'descricao', 'prioridade', 'id_turma' ] 
                } 
            }
        });

        return res.json(user);
},

   async joinTurma(req, res){
        const { id_aluno, id_turma } = req.params;
        const user = await User.findByPk(id_aluno);
        const turma = await Turma.findByPk(id_turma);
        
        if(!user){
            return res.status(400).json({ error: 'Usuario não existe' });
        }

        if(!turma){
            return res.status(400).json({ error: 'Turma não existe' });
        }

        if(id_aluno == turma.id_professor){
            return res.status(400).json({error: 'Não pode entrar na própia turma'})
        }
        
        const portfolio = await Portfolio.findOrCreate({where: { id_aluno, id_turma }})

        if(!portfolio[1]){
            return res.status(400).json({ error: 'Você já está nessa turma' })
        }

        await turma.addUser(user);

        return res.json('Você entrou na turma ' + turma.name + ', um portfolio foi adicionado para essa turma');

   }
}