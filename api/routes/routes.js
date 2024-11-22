const express = require('express')
const router = express.Router()
const {connection} = require('../db')

router.get('/', (req, res)=>{
    connection.query('SELECT * FROM anunciante', (err, results) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err.message);
          res.status(500).send('Erro ao buscar dados');
          return;
        }
        res.json(results);
    });
})

router.post('/', (req, res)=>{
  console.log(req.body)
  res.send('Submetido com sucesso!')
    // let {cpf, nome, fone, email} = req.body
    // connection.query(`INSERT into anunciante(cpf, nome, fone, email) VALUES('${cpf}', '${nome}', '${fone}', '${email}')`, (err, results) => {
    //     if (err) {
    //       console.error('Erro ao executar a consulta:', err.message);
    //       res.status(500).send('Erro ao buscar dados');
    //       return;
    //     }
    //     res.json(`${results.affectedRows} linha afetada`);
    // });
})

router.put('/:id', (req, res)=>{    
    
})

router.delete('/:id', (req, res)=>{
    connection.query(`DELETE FROM anunciante WHERE id = ${req.params.id}`, (err, results) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err.message);
          res.status(500).send('Erro ao buscar dados');
          return;
        }
        res.json(`${results.affectedRows} linha afetada`);
    });
})

module.exports = router