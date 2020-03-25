const express = require('express')
const cors = require('cors')
const routes = require('./routes')


const app = express()

//para o app entender que as respostas e requisiscoes serao em json (precisa ser declarado antes das rotas)
app.use(cors())
app.use(express.json())
app.use(routes)

//rota / recurso

/*
  * MÉTODOS HTTP
  *
  * GET: quando vai buscar alguma informacao do backend
  * POST: criar uma informacao no backend
  * PUT: alterar uma informacao no backend
  * DELETE: deletar uma informacao no backend 
  *
*/

/*
  *TIPOS DE PARAMETROS
  *
  * Query params: Parametros nomeados enviados na rota após "?" (filtros, paginacao) concatena com "&"
  * Route params: Parametros utilizados para identificar recursos (por ex, pra acessar um registro de determinado :id)
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
  * BANCO DE DADOS
  * Banco relacional: SQLite
  * 
  * Acesso
  * Driver: select * from users
  * Query Builder: table('users').select('*').where() 
*/

 //const params = request.query //para acessar os paramns query

    //const params = request.params //para acessar os recursos


app.listen(3333)