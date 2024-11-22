const runserver = require('./server')
const migration = ()=>{
    console.log('testando migration')
}

const funcao = process.argv[2];

if (funcao == "migration") migration()
if (funcao == "runserver") runserver()

// const express = require('express')
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',       // Nome do host
//     user: 'root',      // Usuário do MySQL
//     password: 'password',    // Senha do MySQL
//     database: 'autoseller',
//     port : '3300' // Nome do banco de dados
// });

// // Conectar ao banco de dados
// connection.connect((err) => {
// if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err.message);
//     return;
// }
// console.log('Conectado ao banco de dados MySQL.');
// });


// app = express()
// app.use(express.json())

// // app.use(express.static('public'));
// app.get('/', (req, res)=>{    
//     consultaDB('SELECT * FROM anunciante')
// })

// app.post('/', (req, res)=>{

// })

// app.delete('/:id', (req, res)=>{
//     console.log(req.params)
//     consultaDB(`DELETE FROM anunciante WHERE id = ${req.params.id}`)
// })


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, ()=>{
//     console.log(`servidor rodando na porta ${PORT}`)
// })