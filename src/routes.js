const express = require('express');

const userController = require('./controllers/userController');
const turmaController = require('./controllers/turmaController');
const tarefaController = require('./controllers/tarefaController');
const arquivoController = require('./controllers/arquivoController');

const multer = require('multer')
const multerConfig = require('./config/multer');

const rota = express.Router();
//User

rota.post('/user', userController.store);
rota.post('/user/:id_aluno/:id_turma', userController.joinTurma);

rota.get('/users', userController.show);
rota.get('/user/tarefas/:id_aluno', userController.showTarefas);

//
//Turma

rota.post('/turma/:id_professor', turmaController.store);

rota.get('/turmas/:id_professor', turmaController.show);
rota.get('/alunos/:id_turma', turmaController.showAlunos);
rota.get('/tarefas/:id_turma', turmaController.showTarefas);

//
//Tarefa

rota.post('/tarefa/:id_turma', tarefaController.store);

rota.get('/tarefas', tarefaController.show);

//
//Arquivo

    rota.post('/arquivo/:id_portfolio/:id_tarefa', multer(multerConfig).single('file') ,arquivoController.store)

//
module.exports = rota;
