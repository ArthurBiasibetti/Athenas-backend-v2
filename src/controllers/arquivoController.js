const Arquivo = require('../model/Arquivo');

module.exports = {
    async store(req, res){
        const { id_portfolio } = req.params;
        const { id_tarefa } = req.params;
        const caminho = req.file.key;
        const arquivo = await Arquivo.create({ id_portfolio, id_tarefa, caminho });
        
        return res.json(arquivo);   
    }
}