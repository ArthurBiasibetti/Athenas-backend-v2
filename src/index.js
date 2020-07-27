const express = require ('express')
const rotas = require('./routes')

require ('./database')

const app = express()

app.use(express.json());

app.use(express.urlencoded({ extended:true }))

app.use(rotas);

app.listen(8000, () => {
    console.log('servidor ligado')
})